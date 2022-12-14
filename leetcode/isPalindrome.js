// Given an integer x, return true if x is a palindrome, and false otherwise.

const { performance } = require('perf_hooks');

const isPalindrome = (x) => {
  const xString = x.toString()
  let l = 0
  let r = xString.length - 1

  while (l < r) {
    if (xString[l] != xString[r]) return false
    l++
    r--
  }
  return true
}

console.log(isPalindrome("121"), "should be true")
console.log(isPalindrome("-121"), "should be false")
console.log(isPalindrome("10"), "should be false")
console.log(isPalindrome("5555555555555555555555"), "should be true")
console.log(isPalindrome("0"), "should be true")