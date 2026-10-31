let dbPromise;
function db(){return dbPromise??=new Promise((resolve,reject)=>{
 const r=indexedDB.open('opic-im3-lab',1);
 r.onupgradeneeded=()=>{r.result.createObjectStore('sessions',{keyPath:'id'});r.result.createObjectStore('audio');};
 r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);
});}
async function transact(store,mode,action){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction(store,mode);const request=action(tx.objectStore(store));let result;request.onsuccess=()=>{result=request.result;};tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Storage aborted'));});}
export const saveSession=s=>transact('sessions','readwrite',store=>store.put(s));
export const allSessions=()=>transact('sessions','readonly',store=>store.getAll());
export const saveAudio=(id,index,blob)=>transact('audio','readwrite',store=>store.put(blob,`${id}:${index}`));
export const getAudio=(id,index)=>transact('audio','readonly',store=>store.get(`${id}:${index}`));
export async function deleteSession(s){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction(['sessions','audio'],'readwrite');tx.objectStore('sessions').delete(s.id);s.answers.forEach((_,i)=>tx.objectStore('audio').delete(`${s.id}:${i}`));tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);});}
