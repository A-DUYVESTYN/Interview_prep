/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

const shortestWords = function (sentance) {
  // split sentance into array of words
  // iterate over words counting the word length
  // check if length is less than smallest length

  wordArr = sentance.split(" ")
  let smallest = 999
  for (word of wordArr) {
    length = word.length
    if (length < smallest) smallest = length
  } 

  return smallest
}


console.log(shortestWords("Hi this is my name"))
console.log(shortestWords("Hi this is my name and I am so happy"))
