// 🔥 COMPLETE - 7 CONTESTS = 21 LeetCode Problems (EASY → HARD)
const CONTEST_PROBLEMS = {
  'free-daily': [  // Contest 1 - Easy Daily
    {
      id: 'two-sum',
      title: 'Two Sum',
      difficulty: 'Easy',
      description: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.

You may assume that each input would have <em>exactly one solution</em>, and you may not use the same element twice.`,
      examples: [
        {input: 'nums = [2,7,11,15], target = 9', output: '[0,1]'},
        {input: 'nums = [3,2,4], target = 6', output: '[1,2]'},
        {input: 'nums = [3,3], target = 6', output: '[0,1]'}
      ],
      constraints: '2 ≤ nums.length ≤ 10⁴<br>-10⁹ ≤ nums[i] ≤ 10⁹'
    },
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      description: `Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.`,
      examples: [
        {input: 's = "()"', output: 'true'},
        {input: 's = "()[]{}"', output: 'true'},
        {input: 's = "(]"', output: 'false'}
      ]
    },
    {
      id: 'reverse-integer',
      title: 'Reverse Integer',
      difficulty: 'Medium',
      description: `Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2³¹, 2³¹ - 1]</code>, then return <code>0</code>.`,
      examples: [
        {input: 'x = 123', output: '321'},
        {input: 'x = -123', output: '-321'},
        {input: 'x = 120', output: '21'}
      ]
    }
  ],

  'quick-9': [  // Contest 2 - Quick 9 Min
    {
      id: 'contains-duplicate',
      title: 'Contains Duplicate',
      difficulty: 'Easy',
      description: `Given an integer array <code>nums</code>, return <code>true</code> if any value appears <em>at least twice</em> in the array, and return <code>false</code> if every element is <em>distinct</em>.`,
      examples: [
        {input: 'nums = [1,2,3,1]', output: 'true'},
        {input: 'nums = [1,2,3,4]', output: 'false'},
        {input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true'}
      ]
    },
    {
      id: 'roman-to-integer',
      title: 'Roman to Integer',
      difficulty: 'Easy',
      description: `Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>. Given a roman numeral, convert it to an integer.`,
      examples: [
        {input: 's = "III"', output: '3'},
        {input: 's = "LVIII"', output: '58'},
        {input: 's = "MCMXCIV"', output: '1994'}
      ]
    },
    {
      id: 'palindrome-number',
      title: 'Palindrome Number',
      difficulty: 'Easy',
      description: `Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.`,
      examples: [
        {input: 'x = 121', output: 'true'},
        {input: 'x = -121', output: 'false'},
        {input: 'x = 10', output: 'false'}
      ]
    }
  ],

  'pro-19': [  // Contest 3 - Pro 19 Min
    {
      id: 'longest-common-prefix',
      title: 'Longest Common Prefix',
      difficulty: 'Easy',
      description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.`,
      examples: [
        {input: 'strs = ["flower","flow","flight"]', output: '"fl"'},
        {input: 'strs = ["dog","racecar","car"]', output: '""'}
      ]
    },
    {
      id: 'climbing-stairs',
      title: 'Climbing Stairs',
      difficulty: 'Easy',
      description: `You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
      examples: [
        {input: 'n = 2', output: '2'},
        {input: 'n = 3', output: '3'}
      ]
    },
    {
      id: 'merge-two-sorted-lists',
      title: 'Merge Two Sorted Lists',
      difficulty: 'Easy',
      description: `You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>. Merge the two lists in a one sorted list.`,
      examples: [
        {input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]'}
      ]
    }
  ],

  'weekly': [  // Contest 4 - Weekly
    {
      id: 'best-time-to-buy-and-sell-stock',
      title: 'Best Time to Buy and Sell Stock',
      difficulty: 'Easy',
      description: `You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day. Find the maximum profit you can achieve.`,
      examples: [
        {input: 'prices = [7,1,5,3,6,4]', output: '5'},
        {input: 'prices = [7,6,4,3,1]', output: '0'}
      ]
    },
    {
      id: 'valid-anagram',
      title: 'Valid Anagram',
      difficulty: 'Easy',
      description: `Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.`,
      examples: [
        {input: 's = "anagram", t = "nagaram"', output: 'true'},
        {input: 's = "rat", t = "car"', output: 'false'}
      ]
    },
    {
      id: 'rotate-array',
      title: 'Rotate Array',
      difficulty: 'Medium',
      description: `Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.`,
      examples: [
        {input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]'}
      ]
    }
  ],

  'bi-weekly': [  // Contest 5 - Bi-Weekly
    {
      id: 'move-zeroes',
      title: 'Move Zeroes',
      difficulty: 'Easy',
      description: `Given an integer array <code>nums</code>, move all <code>0</code>'s to the end while maintaining the relative order of the non-zero elements.`,
      examples: [
        {input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]'},
        {input: 'nums = [0]', output: '[0]'}
      ]
    },
    {
      id: 'single-number',
      title: 'Single Number',
      difficulty: 'Easy',
      description: `Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one.`,
      examples: [
        {input: 'nums = [2,2,1]', output: '1'},
        {input: 'nums = [4,1,2,1,2]', output: '4'}
      ]
    },
    {
      id: 'majority-element',
      title: 'Majority Element',
      difficulty: 'Easy',
      description: `Given an array <code>nums</code> of size <code>n</code>, return the majority element. The majority element is the element that appears more than <code>⌊n / 2⌋</code> times.`,
      examples: [
        {input: 'nums = [3,2,3]', output: '3'},
        {input: 'nums = [2,2,1,1,1,2,2]', output: '2'}
      ]
    }
  ],

  'flash': [  // Contest 6 - Flash Contest
    {
      id: 'first-unique-character',
      title: 'First Unique Character in a String',
      difficulty: 'Easy',
      description: `Given a string <code>s</code>, find the first non-repeating character in it and return its index. If it does not exist, return -1.`,
      examples: [
        {input: 's = "leetcode"', output: '0'},
        {input: 's = "loveleetcode"', output: '2'}
      ]
    },
    {
      id: 'intersection-of-two-arrays',
      title: 'Intersection of Two Arrays',
      difficulty: 'Easy',
      description: `Given two integer arrays <code>nums1</code> and <code>nums2</code>, return an array of their intersection.`,
      examples: [
        {input: 'nums1 = [1,2,2,1], nums2 = [2,2]', output: '[2,2]'},
        {input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', output: '[4,9]'}
      ]
    },
    {
      id: 'plus-one',
      title: 'Plus One',
      difficulty: 'Easy',
      description: `You are given a large integer represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. Add one to it.`,
      examples: [
        {input: 'digits = [1,2,3]', output: '[1,2,4]'},
        {input: 'digits = [9,9,9]', output: '[1,0,0,0]'}
      ]
    }
  ],

  'ultimate': [  // Contest 7 - Ultimate (Hardest)
    {
      id: 'container-with-most-water',
      title: 'Container With Most Water',
      difficulty: 'Medium',
      description: `You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>. Find two lines that together with the x-axis form a container that holds the most water.`,
      examples: [
        {input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49'}
      ]
    },
    {
      id: '3sum',
      title: '3Sum',
      difficulty: 'Medium',
      description: `Given an integer array <code>nums</code>, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j != k</code> and <code>nums[i] + nums[j] + nums[k] == 0</code>.`,
      examples: [
        {input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]'}
      ]
    },
    {
      id: 'longest-substring-without-repeating',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      description: `Given a string <code>s</code>, find the length of the longest substring without repeating characters.`,
      examples: [
        {input: 's = "abcabcbb"', output: '3'},
        {input: 's = "bbbbb"', output: '1'}
      ]
    }
  ]
};

// Export globally for exam.html
window.CONTEST_PROBLEMS = CONTEST_PROBLEMS;
