// questions/free-200.js - Beginner Level (30 MCQ + 2 Coding)
const FREE_200_QUESTIONS = [
  // ========== 30 MCQ ==========
  {title:"Q1: Array",statement:"int arr[]={1,2,3}; arr[1]?",options:["1","2","3","Error"],correct:"B"},
  {title:"Q2: Pointer",statement:"int x=5; x++; x=?",options:["4","5","6","Error"],correct:"C"},
  {title:"Q3: Java String",statement:'String s="hi"; s.length?',options:["0","1","2","3"],correct:"C"},
  {title:"Q4: SQL",statement:"SELECT COUNT(*) FROM users?",options:["Total users","Unique users","First user","No users"],correct:"A"},
  // ... 26 more (same pattern)
  ...Array.from({length:26},(_,i)=>({
    title:`Q${i+5}`,statement:`Basic Q${i+5}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],
    correct:String.fromCharCode(65+(i%4))
  })),
  
  // ========== CODING ==========
  {title:"Q31: Two Sum",statement:"nums=[2,7,11], target=9 → [0,1]",type:"coding",time:900},
  {title:"Q32: Palindrome",statement:"121→true (no string)",type:"coding",time:900}
];

window.FREE_200_QUESTIONS = FREE_200_QUESTIONS;
