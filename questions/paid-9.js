// questions/paid-9.js - ₹9 Quick Rush (SPEED Questions)
const PAID_9_QUESTIONS = [
  // ========== 30 SPEED MCQs (Different from free-200) ==========
  {title:"Q1: Fast Array",statement:"int a[5]={0}; printf('%d',a[4]);",options:["0","1","Garbage","Error"],correct:"A"},
  {title:"Q2: Quick Loop",statement:"for(int i=5;i>=0;i--); i=?",options:["6","5","0","-1"],correct:"B"},
  {title:"Q3: SQL Speed",statement:"SELECT COUNT(*) FROM users WHERE age>18;",options:["All users","Adults","Minors","Error"],correct:"B"},
  {title:"Q4: C++ Fast",statement:"int x=10; cout<<x++<<++x;",options:["10 11","11 11","10 12","11 12"],correct:"D"},
  {title:"Q5: Java Speed",statement:"List<Integer> l = new ArrayList<>(); l.size()==?",options:["0","1","null","Error"],correct:"A"},
  
  // 25 more SPEED questions (different logic)
  ...Array.from({length: 25}, (_, i) => ({
    title: `Q${i+6}`,
    statement: `Speed Test ${i+6}: ${['Binary search', 'HashMap get', 'Stack pop', 'Queue enqueue'][i%4]} time?`,
    options: [`A) O(${['n','1','1','1'][i%4]})`, `B) O(log n)`, `C) O(n log n)`, `D) O(n²)`],
    correct: String.fromCharCode(65 + ((i+1) % 4))
  })),

  // ========== SPEED CODING (Different from free) ==========
  {title:"Q31: Rotate Array",statement:"[1,2,3,4,5] k=2 → [4,5,1,2,3]\nO(n) time, O(1) space!",type:"coding",time:900},
  {title:"Q32: Valid Parentheses",statement:"()[]{} → true\n(] → false\nStack use karo!",type:"coding",time:900}
];

window.PAID_9_QUESTIONS = PAID_9_QUESTIONS;
