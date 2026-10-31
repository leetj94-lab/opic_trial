export const TYPES = {
  intro: { label: '자기소개', goal: '현재의 나 → 일상 → 관심사', tip: '짧은 소개 뒤 일상과 관심사를 구체적으로 연결해 보세요.' },
  description: { label: '장소·대상 묘사', goal: '핵심 특징 → 세부 묘사 → 개인적 이유', tip: '첫 문장에서 대상을 정하고 특징 2개와 좋아하는 이유를 덧붙이세요.' },
  routine: { label: '일상·과정 설명', goal: '보통 하는 일 → 순서 → 이유', tip: 'Usually, first, then 같은 표현으로 일상의 순서를 자연스럽게 이어 보세요.' },
  past: { label: '과거 경험', goal: '언제·어디서 → 사건 → 감정·결과', tip: '한 가지 사건에 집중하고, 과거 시제와 그때의 감정을 함께 전달해 보세요.' },
  comparison: { label: '비교·변화', goal: '이전 → 현재 → 차이와 이유', tip: '두 대상을 같은 기준으로 비교하고, 내 선호나 변화의 이유로 마무리하세요.' },
  ask: { label: '롤플레이 · 질문하기', goal: '상황 설명 → 질문 3개 → 마무리', tip: '실제로 전화를 걸었다고 생각하고, 상황에 필요한 질문을 3개 해 보세요.' },
  problem: { label: '롤플레이 · 문제 해결', goal: '문제 → 대안 2개 → 확인 요청', tip: '문제를 분명하게 설명하고 실행 가능한 대안을 제시한 뒤 상대의 의사를 물어보세요.' },
  followup: { label: '관련 경험·돌발', goal: '비슷한 경험 → 대처 → 배운 점', tip: '질문에 맞는 실제 경험 하나로 답하세요. 어려운 단어보다 이해 가능한 연결이 우선입니다.' }
};
export const TOPICS = [
 { id:'home', label:'집·동네', icon:'⌂', subject:'your home and neighborhood',
  description:'Describe your home. What does it look like, and which room do you like the most? Tell me why.',
  routine:'Tell me what you usually do at home after a busy day. Walk me through your evening.',
  past:'Tell me about a memorable event that happened in your neighborhood. What happened, and how did you feel?',
  comparison:'Compare the place where you lived as a child with your home now. What are the biggest differences?' },
 { id:'cafe', label:'카페·외식', icon:'☕', subject:'cafés and restaurants',
  description:'Describe a café or restaurant you like to visit. What is it like, and what makes it special to you?',
  routine:'What do you usually do when you visit a café? Tell me what you order and how you spend your time there.',
  past:'Tell me about a memorable meal you had at a restaurant. Who were you with, and what made it memorable?',
  comparison:'How have cafés in your area changed over the years? Compare them with cafés you remember from the past.' },
 { id:'travel', label:'여행·휴가', icon:'✈', subject:'travel and vacations',
  description:'Describe a place you like to visit on vacation. What can people see and do there?',
  routine:'How do you usually prepare for a trip? Explain the steps from choosing a destination to packing your bag.',
  past:'Tell me about a trip that you still remember well. Where did you go, what happened, and why was it special?',
  comparison:'Compare traveling alone with traveling with other people. Which do you prefer, and why?' },
 { id:'exercise', label:'운동·공원', icon:'↗', subject:'exercise and parks',
  description:'Describe a park or place where you exercise. What does it look like, and what do you like about it?',
  routine:'Tell me about your usual exercise routine. When do you exercise, and what do you do from start to finish?',
  past:'Tell me about a memorable time when you exercised or visited a park. What happened that day?',
  comparison:'How is your exercise routine different from when you were younger? Explain what changed and why.' },
 { id:'music', label:'음악·영화', icon:'♫', subject:'music and movies',
  description:'Tell me about a musician or a type of music you enjoy. What is it like, and why do you enjoy it?',
  routine:'When and where do you usually listen to music? Tell me how music fits into your everyday life.',
  past:'Tell me about a concert or movie you really enjoyed. Describe what happened and how you felt afterward.',
  comparison:'Compare the movies or music you enjoyed as a child with what you enjoy now. How has your taste changed?' },
 { id:'shopping', label:'쇼핑·기술', icon:'▦', subject:'shopping and technology',
  description:'Describe a device that you use often. What does it look like, and what do you use it for?',
  routine:'Tell me how you usually shop online. How do you choose an item and decide whether to buy it?',
  past:'Tell me about a memorable purchase. What did you buy, and what happened when you started using it?',
  comparison:'Compare shopping online with shopping in a physical store. What are the advantages of each?' }
];
const roles = {
 home: [
  ['You want to rent an apartment. Call a rental agent and ask three or four questions about an apartment you are interested in.', 'The apartment you arranged to view is no longer available. Call the agent, explain what you need, and suggest two alternatives.', 'Have you ever had a problem with your home or a reservation? Explain what happened and how you dealt with it.'],
  ['You want to join a neighborhood activity. Call the organizer and ask three or four questions about the activity.', 'You cannot attend the neighborhood activity you signed up for. Call the organizer, explain the problem, and suggest two solutions.', 'Tell me about a time your plans with neighbors or friends changed unexpectedly. What did you do?']
 ],
 cafe: [
  ['You want to reserve a restaurant for a birthday dinner. Call the restaurant and ask three or four questions.', 'The restaurant has booked your birthday dinner for the wrong date. Call, explain the problem, and suggest two ways to resolve it.', 'Tell me about a time you had a problem at a restaurant. What happened, and how was it resolved?'],
  ['You are planning to visit a new café with a friend. Call the café and ask three or four questions before your visit.', 'The café where you planned to meet is closed today. Call your friend, explain the situation, and offer two alternatives.', 'Tell me about a time you had to change a meeting place at the last minute. What happened?']
 ],
 travel: [
  ['You are planning a weekend trip. Call a hotel and ask three or four questions about staying there.', 'You arrive at the hotel, but your room is not ready and you need to leave soon. Explain the problem and suggest two solutions to the receptionist.', 'Tell me about a travel problem you experienced. What went wrong, and what did you do?'],
  ['You want to take a guided tour on vacation. Call the tour company and ask three or four questions.', 'Your tour has been canceled because of bad weather. Call the company, explain your situation, and ask about two alternative arrangements.', 'Tell me about a time the weather changed your travel plans. How did you respond?']
 ],
 exercise: [
  ['You want to join a gym. Call the gym and ask three or four questions about membership and facilities.', 'You joined a gym, but the class you wanted is full. Speak to a staff member, explain the problem, and suggest two alternatives.', 'Tell me about a time something interrupted your exercise plans. What did you do instead?'],
  ['You want to rent a bicycle at a park. Ask the rental shop three or four questions about renting a bike.', 'The bicycle you rented has a problem. Call the rental shop, explain what is wrong, and suggest two ways to fix the situation.', 'Tell me about a time a piece of equipment did not work as expected. What happened?']
 ],
 music: [
  ['You want to buy tickets for a concert. Call the ticket office and ask three or four questions.', 'Your concert ticket shows the wrong performance date. Call the ticket office, explain the problem, and suggest two solutions.', 'Tell me about a time your plans for a concert or movie changed unexpectedly. What did you do?'],
  ['You want to see a movie with a friend. Call the cinema and ask three or four questions to plan your visit.', 'You cannot make it to the movie you planned to see with your friend. Call your friend, explain why, and suggest two alternatives.', 'Tell me about a memorable time you watched a movie with someone. What made the experience special?']
 ],
 shopping: [
  ['You want to buy a new phone. Call an electronics store and ask three or four questions about a phone you are considering.', 'The phone you bought does not work properly. Call the store, explain the problem, and propose two solutions.', 'Tell me about a time you had to return or repair something you bought. How did you resolve the issue?'],
  ['You want to order a gift online. Call the shop and ask three or four questions about the product and delivery.', 'Your gift will not arrive before your friend’s birthday. Call the shop, explain the situation, and suggest two alternatives.', 'Tell me about a time an online order arrived late or was different from what you expected. What did you do?']
 ]
};
export const BANK = [
 ...['Please tell me about yourself. What do you do, and what do you enjoy doing in your free time?', 'Let’s start with an introduction. Tell me about your everyday life and a few things that are important to you.', 'Please introduce yourself. Tell me where you live, what keeps you busy, and something you enjoy.'].map((text,i)=>({id:`intro-${i}`,type:'intro',topic:'general',text})),
 ...TOPICS.flatMap(t=>['description','routine','past','comparison'].map(type=>({id:`${t.id}-${type}`,topic:t.id,type,text:t[type]}))),
 ...Object.entries(roles).flatMap(([topic,sets])=>sets.flatMap((set,i)=>set.map((text,j)=>({id:`${topic}-role-${i}-${j}`,topic,type:['ask','problem','followup'][j],bundle:`${topic}-${i}`,text}))))
];
export function shuffle(items, random=Math.random) { const a=[...items]; for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
export function makeExam(mode='sampler', topics=TOPICS.map(t=>t.id), random=Math.random) {
 if(!topics.length) throw new Error('주제를 하나 이상 선택하세요.');
 if(mode==='combo'&&topics.length<2) throw new Error('콤보 연습은 주제를 2개 이상 선택하세요.');
 const pool=BANK.filter(q=>q.topic==='general'||topics.includes(q.topic));
 const pick=type=>shuffle(pool.filter(q=>q.type===type),random)[0];
 const chosen=shuffle(topics,random), first=chosen[0], second=chosen[1]||first;
 const bundle=shuffle(pool.filter(q=>q.type==='ask'),random)[0].bundle;
 const role=['ask','problem','followup'].map(type=>pool.find(q=>q.bundle===bundle&&q.type===type));
 if(mode==='quick') return [pick('description'),pick('past'),...role.slice(0,2)];
 if(mode==='combo') return [pick('intro'),...['description','routine','past'].map(type=>pool.find(q=>q.topic===first&&q.type===type)),...['description','routine','past'].map(type=>pool.find(q=>q.topic===second&&q.type===type)),...role,pick('comparison'),pool.find(q=>q.type==='followup'&&q.id!==role[2].id)]
   .map((q,i,all)=>all.findIndex(x=>x.id===q.id)!==i ? {...q,id:`${q.id}-repeat-${i}`} : q);
 return [pick('intro'),pick('description'),pick('routine'),pick('past'),pick('comparison'),...role];
}
