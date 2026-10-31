import {mkdir,cp} from 'node:fs/promises';
await mkdir(new URL('../dist/',import.meta.url),{recursive:true});
for(const file of ['index.html','style.css','js','.nojekyll']) await cp(new URL('../'+file,import.meta.url),new URL('../dist/'+file,import.meta.url),{recursive:true});
