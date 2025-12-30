const CONTEST_PROBLEMS = {
  // FREE CONTESTS (Easy problems)
  'free-daily': [
    {id:1, title:"Two Sum", difficulty:"Easy", topics:"Array, HashMap", desc:"nums=[2,7,11,15], target=9 → return [0,1]", sample:"Input: nums=[2,7,11,15], target=9\nOutput: [0,1]"},
    {id:2, title:"Valid Parentheses", difficulty:"Easy", topics:"Stack", desc:"s=\"()[]{}\" → true", sample:"Input: s=\"()[]{}\"\nOutput: true"},
    {id:3, title:"Palindrome Number", difficulty:"Easy", topics:"Math", desc:"121 → true, 10 → false", sample:"Input: 121\nOutput: true"}
  ],
  
  'free-mega': [
    {id:1, title:"Longest Common Prefix", difficulty:"Easy", topics:"String", desc:"[\"flower\",\"flow\",\"flight\"] → \"fl\"", sample:"Input: [\"flower\",\"flow\",\"flight\"]\nOutput: \"fl\""},
    {id:2, title:"Merge Two Sorted Lists", difficulty:"Easy", topics:"LinkedList", desc:"1→2→4 + 1→3→4 → 1→1→2→3→4→4", sample:"Input: l1=1→2→4, l2=1→3→4\nOutput: 1→1→2→3→4→4"},
    {id:3, title:"Climbing Stairs", difficulty:"Easy", topics:"DP", desc:"n=3 → 3 ways (1+1+1, 1+2, 2+1)", sample:"Input: n=3\nOutput: 3"}
  ],

  // PAID CONTESTS (Easy → Medium → Hard)
  'quick-9': [
    {id:1, title:"Contains Duplicate", difficulty:"Easy", topics:"Array, HashSet", desc:"[1,2,3,1] → true", sample:"Input: [1,2,3,1]\nOutput: true"},
    {id:2, title:"Roman to Integer", difficulty:"Easy", topics:"HashMap, String", desc:"III → 3, LVIII → 58, MCMXCIV → 1994", sample:"Input: \"LVIII\"\nOutput: 58"},
    {id:3, title:"Maximum Subarray", difficulty:"Medium", topics:"DP, Array", desc:"[-2,1,-3,4,-1,2,1,-5,4] → 6", sample:"Input: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6"}
  ],
  
  'pro-49': [
    {id:1, title:"Group Anagrams", difficulty:"Medium", topics:"HashMap, String", desc:"[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"] → groups", sample:"Input: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\nOutput: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"},
    {id:2, title:"Top K Frequent Elements", difficulty:"Medium", topics:"HashMap, Heap", desc:"[1,1,1,2,2,3], k=2 → [1,2]", sample:"Input: nums=[1,1,1,2,2,3], k=2\nOutput: [1,2]"},
    {id:3, title:"Longest Palindromic Substring", difficulty:"Medium", topics:"String, DP", desc:"babad → \"bab\" or \"aba\"", sample:"Input: \"babad\"\nOutput: \"bab\""}
  ],
  
  'elite-149': [
    {id:1, title:"LRU Cache", difficulty:"Medium", topics:"HashMap, DoublyLinkedList", desc:"capacity=2 → get(2)=2 after put(1,1),put(2,2),get(1)=1", sample:"Operations: [\"LRUCache(2)\",\"put(1,1)\",\"put(2,2)\"]\nOutput: [null,null,null]"},
    {id:2, title:"Word Ladder", difficulty:"Hard", topics:"BFS, Graph", desc:"hit→cog, wordList=[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"] → 5", sample:"Input: hit→cog\nOutput: 5"},
    {id:3, title:"Median of Two Sorted Arrays", difficulty:"Hard", topics:"BinarySearch", desc:"[1,3] + [2] → 2.0", sample:"Input: nums1=[1,3], nums2=[2]\nOutput: 2.00000"}
  ],
  
  'champion-199': [
    {id:1, title:"Serialize and Deserialize Binary Tree", difficulty:"Hard", topics:"Tree, String", desc:"[1,2,3,null,null,4,5] → \"1,2,3,null,null,4,5\"", sample:"Input: root=[1,2,3,null,null,4,5]\nOutput: [\"1,2,3,null,null,4,5\"]"},
    {id:2, title:"Trapping Rain Water", difficulty:"Hard", topics:"Array, TwoPointer", desc:"[0,1,0,2,1,0,1,3,2,1,2,1] → 6", sample:"Input: [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6"},
    {id:3, title:"Regular Expression Matching", difficulty:"Hard", topics:"DP, String", desc:"\"aa\" + \"a*\" → true", sample:"Input: s=\"aa\", p=\"a*\"\nOutput: true"}
  ],
  
  'mega-99': [
    {id:1, title:"Merge k Sorted Lists", difficulty:"Hard", topics:"Heap, LinkedList", desc:"[[1→4→5],[1→3→4],[2→6]] → 1→1→2→3→4→4→5→6", sample:"Input: lists=[[1→4→5],[1→3→4],[2→6]]\nOutput: 1→1→2→3→4→4→5→6"},
    {id:2, title:"N-Queens", difficulty:"Hard", topics:"Backtracking", desc:"n=4 → 2 solutions", sample:"Input: n=4\nOutput: [[.Q..,...Q,.Q..,..Q.],[..Q.,Q...,...Q,.Q..]]"},
    {id:3, title:"Word Break II", difficulty:"Hard", topics:"DP, Backtracking", desc:"\"catsanddog\" + [\"cats\",\"and\",\"dog\"] → [\"cats and dog\"]", sample:"Input: s=\"catsanddog\", wordDict=[\"cats\",\"and\",\"dog\"]\nOutput: [\"cats and dog\"]"
  ]
};
