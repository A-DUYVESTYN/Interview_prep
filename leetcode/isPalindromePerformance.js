const { performance } = require('perf_hooks');

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Soulution using built-in reverse function:
// const isPalindrome = (x) => {
//   const str = x.toString()
//   return str === str.toString().split("").reverse().join("")
// }

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
console.log(isPalindrome("55555555555255555555555"), "should be true")


// note the performace reported is highly variable and has warmup time for the first iteration
// const displayRuntime = (func, param) => {
//   let startTime = performance.now()
//   console.log(func(param))
//   let endTime = performance.now()
//   console.log(`Execution time: ${endTime - startTime} milliseconds`)
// }
// const testCases = [121,-121,10,55555255555]
// testCases.forEach(e => displayRuntime(isPalindrome,e))
 
const displayAvgRuntime = (func) => {
  const iterations = 100000
  const startTime = performance.now()
  for (i=0; i<iterations; i++) {
    func(i)
  }
  const endTime = performance.now()

  const avgRuntime = (endTime - startTime)/iterations
  console.log(`Execution time averaged over ${iterations} iterations:\n${avgRuntime} milliseconds`)
}

displayAvgRuntime(isPalindrome)


