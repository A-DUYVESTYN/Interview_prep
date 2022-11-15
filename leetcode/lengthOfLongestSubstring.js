/*
 * @param {string} s
 * @return {number}
*/
//Given a string s, find the length of the longest substring without repeating characters.
//iterate over the characters, pushing each char to a substring array.
//check if current char is included in the substring array, if true, remove the first item in the array, check again until not true
// keep track of the maximum length of the substring array
const lengthOfLongestSubstring = function(s) {
  const substringArr = []
  let max = 0

  s.split('').forEach(element => {
    substringArr.push(element)
    // console.log("START///////////////////",element, substringArr, max)
    while (substringArr.slice(0,-1).includes(element)) substringArr.shift()
    if (substringArr.length > max) max = substringArr.length
    // console.log(substringArr, max)
  });
  return max
};

console.log(lengthOfLongestSubstring("pwwkew"), "should equal 3")
console.log(lengthOfLongestSubstring("abcabcbb"), "should equal 3")