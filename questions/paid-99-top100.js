// questions/paid-99-top100.js - Grand League (Top 100)
const PAID_99_TOP100_QUESTIONS = [
  {title:"Q1: N-Queens",statement:"N=4 solutions?",options:["0","2","92","256"],correct:"B"},
  {title:"Q2: Sudoku",statement:"9x9 valid?",options:["Backtracking","DP","Greedy","BFS"],correct:"A"},
  // ... + N-Queens, Sudoku Solver
  ...Array.from({length:28},(_,i)=>({title:`Q${i+3}`,statement:`Grand Q${i+3}`,options:[`A) ${i}`,`B) ${i+1}`,`C) ${i+2}`,`D) ${i+3}`],correct:String.fromCharCode(65+(i%4))})),
  {title:"Q31: N-Queens",statement:"N=4 chessboard (all solutions)",type:"coding",time:900},
  {title:"Q32: Sudoku Solver",statement:"Solve 9x9 Sudoku",type:"coding",time:900}
];
window.PAID_99_TOP100_QUESTIONS = PAID_99_TOP100_QUESTIONS;
