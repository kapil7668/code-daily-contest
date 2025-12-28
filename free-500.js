// questions/free-500.js - Mega Contest (Data Structures)
const FREE_500_QUESTIONS = [
  {title:"Q1: LinkedList",statement:"Head→next = NULL?",options:["Empty","Last node","First node","Error"],correct:"B"},
  {title:"Q2: Binary Tree",statement:"Root left/right?",options:["Children","Parent","Siblings","None"],correct:"A"},
  // ... 28 more + 2 coding (Merge Sorted Array, Anagram Check)
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`DS Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: Merge Arrays",statement:"[1,3,5] + [2,4,6] → [1,2,3,4,5,6]",type:"coding",time:900},
  {title:"Q32: Anagrams",statement:"eat, tea → true",type:"coding",time:900}
];
window.FREE_500_QUESTIONS = FREE_500_QUESTIONS;
