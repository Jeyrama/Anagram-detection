/*
An anagram is the result of rearranging the letters of a word to produce a new word

Complete the function to return true if the two arguments 
given are anagrams of each other; return false otherwise.

Note: anagrams are case insensitive
*/


// Solution

let isAnagram = function(test, original) {
  let t = test.toLowerCase().split('').sort().join('');
  let o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
}

// or

String.prototype.sortLetters = function() {
  return this.toLowerCase().split('').sort().join('');
}

let Anagram = function(test, original) {
  return test.sortLetters() == original.sortLetters();
}