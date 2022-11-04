// Make this work:
// duplicate([1,2,3]); // [1,2,3,1,2,3]

const duplicate = function (array) {
  return [...array, ...array]
}

console.log(duplicate([1,2,3])); // [1,2,3,1,2,3]


