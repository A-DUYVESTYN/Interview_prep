// Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s: string): string {
  const len = s.length 
  if (!s || len < 2) return s
  let output = ""
  function expandFromCentre(l: number, r: number): string {
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--
      r++
    }
    return s.slice(l+1,r)
  }
  for (let i=0; i<(len-1); i++) {
    const subOdd = expandFromCentre(i,i)
    const subEven = expandFromCentre(i,i+1)
    const sub = subEven.length > subOdd.length ? subEven : subOdd;
    if (sub.length > output.length) output = sub
  }
  return output
};


// function longestPalindrome(s: string): string {
//   if (!s || s.length < 2) return s
//   let output = ""
  
//   for (let i=0; i<(s.length-1); i++) {
//     for (let j=i+1; j<=(s.length); j++) {
//       let sub = s.substring(i,j)
//       console.log(sub)
//       if (sub.length > output.length && sub === sub.split('').reverse().join('')) output = sub
//     }
//   }
//   return output
// };

console.log(longestPalindrome("babad"), "should equal 'bab'")
console.log(longestPalindrome("ac"), "should equal 'a'")
console.log(longestPalindrome("bb"), "should equal 'bb'")

