// Given a string s, return the longest palindromic substring in s.
function longestPalindrome(s) {
    // if (!s || s.length < 2) return s
    var output = "";
    function expandFromCentre(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        console.log("".concat(s.slice(l + 1, r), "  Left: ").concat(l, ", Right: ").concat(r));
        return s.slice(l + 1, r);
    }
    for (var i = 0; i < (s.length - 1); i++) {
        console.log('/////////////centre=', i);
        var subOdd = expandFromCentre(i, i);
        var subEven = expandFromCentre(i, i + 1);
        var sub = subEven.length > subOdd.length ? subEven : subOdd;
        if (sub.length > output.length)
            output = sub;
    }
    return output;
}
;
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
console.log(longestPalindrome("babad"), "should equal 'bab'");
console.log(longestPalindrome("ac"), "should equal 'a'");
console.log(longestPalindrome("bb"), "should equal 'bb'");
