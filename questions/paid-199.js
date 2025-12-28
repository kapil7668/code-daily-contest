// questions/paid-199.js - Champion Level
const PAID_199_QUESTIONS = [
  {title:"Q1: KMP",statement:"Pattern matching?",options:["Rabin-Karp","KMP","Boyer-Moore","Z-Algorithm"],correct:"B"},
  {title:"Q2: Fenwick",statement:"Prefix sum update?",options:["O(log n)","O(1)","O(n)","O(n log n)"],correct:"A"},
  // ... + Merge k Lists, Word Ladder II
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`Champ Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: Merge k Lists",statement:"k sorted lists → 1 list",type:"coding",time:900},
  {title:"Q32: Word Ladder II",statement:"hit→hot→dot→dog (all paths)",type:"coding",time:900}
];
window.PAID_199_QUESTIONS = PAID_199_QUESTIONS;
