// questions/paid-149.js - Elite Level
const PAID_149_QUESTIONS = [
  {title:"Q1: Segment Tree",statement:"Range query time?",options:["O(log n)","O(n)","O(1)","O(n log n)"],correct:"A"},
  {title:"Q2: Union Find",statement:"Connected components?",options:["DFS","Union Find","BFS","Matrix"],correct:"B"},
  // ... + Median Two Arrays, Regex Matching
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`Elite Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: Median Arrays",statement:"[1,3] + [2] → 2.0",type:"coding",time:900},
  {title:"Q32: Regex Matching",statement:"'aa' matches 'a*' → true",type:"coding",time:900}
];
window.PAID_149_QUESTIONS = PAID_149_QUESTIONS;
