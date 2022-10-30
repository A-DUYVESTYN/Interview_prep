////////


/* DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"()((()())())"    =>  true
"(()))("          =>  false
*/


//////


const validParentheses = function (string) {

  let counter = 0

  for (element of string.split("")) {
    if (element === "(") counter++
    else if (element === ")") counter--
    if (counter < 0) return false
  }
  
  return counter === 0
}

console.log(validParentheses("()"))
console.log(validParentheses(")(()))"))
console.log(validParentheses("("))
console.log(validParentheses("()((()())())"))
console.log(validParentheses("(()))("))
