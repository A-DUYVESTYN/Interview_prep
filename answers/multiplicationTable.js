// Given a number, print out a multiplication table up to and including that number

const multiplicationTable = function (num) {
  const outerTable = []
  for (i = 1; i <= num; i++) {
    outerTable.push([])
    for (j = 1; j <= num; j++) {
      outerTable[i-1].push(j*i)
    }
  }
  return outerTable
}

const multiplicationTableZero = function (num) {
  const outerTable = []

  for (i = 0; i <= num; i++) {
    outerTable.push([i])
    for (j = 1; j <= num; j++) {
      const element = (i === 0) ? (1 * j) : (i * j)
      outerTable[i].push(element)
    }
  }
  return outerTable
}


console.log(multiplicationTable(3))
console.log(multiplicationTable(4))
console.log(multiplicationTableZero(3))

/*
    1  2  3
 [
1  [1, 2, 3],
2  [2, 4, 6],
3  [3, 6, 9]
 ]
 
[ 
  [0, 1, 2, 3],
  [1, 1, 2, 3],
  [2, 2, 4, 6],
  [3, 3, 6, 9]
]
*/