// questions/paid-99.js - Advanced DSA
const PAID_99_QUESTIONS = [
  {title:"Q1: Sliding Window",statement:"Max sum subarray size k=3?",options:["DP","Two Pointers","Sliding Window","Brute"],correct:"C"},
  {title:"Q2: Trie",statement:"Prefix search?",options:["BST","HashMap","Trie","LinkedList"],correct:"C"},
  // ... + Trapping Rain Water, Longest Parentheses
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`Adv Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: Trapping Rain",statement:"[0,1,0,2] → 1 unit water",type:"coding",time:900},
  {title:"Q32: Longest Parentheses",statement:"()() → 4",type:"coding",time:900}
];
window.PAID_99_QUESTIONS = PAID_99_QUESTIONS;
