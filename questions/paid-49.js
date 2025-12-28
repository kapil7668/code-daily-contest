// questions/paid-49.js - Pro Level
const PAID_49_QUESTIONS = [
  {title:"Q1: HashMap",statement:"get() average time?",options:["O(1)","O(n)","O(log n)","O(n²)"],correct:"A"},
  {title:"Q2: Heap",statement:"Min-heap top?",options:["Max","Min","Random","Average"],correct:"B"},
  // ... + Product Except Self, Group Anagrams
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`Pro Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: Product Except Self",statement:"[1,2,3,4] → [24,12,8,6]",type:"coding",time:900},
  {title:"Q32: Group Anagrams",statement:"['eat','tea','tan'] → [['eat','tea'],['tan']]",type:"coding",time:900}
];
window.PAID_49_QUESTIONS = PAID_49_QUESTIONS;
