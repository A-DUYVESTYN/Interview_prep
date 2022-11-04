/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/

const queueTime = function (customerArr, tills) {

  // create array where each element represents a till and its value is the customer time at that till
  const tillsArr = [] 
  for (i = 0; i < tills; i++) {
    tillsArr.push(0)
  }
  
  const nextAvailableTill = function (Arr) {
    minimum = Arr[0]
    tillIndex = 0
    for (const i in Arr) {
      if (Arr[i] < minimum) {
        minimum = Arr[i]
        tillIndex = i
      }
    }
    return tillIndex
  }

  for (customer of customerArr) {
    nextTillIndex = nextAvailableTill(tillsArr)
    tillsArr[nextTillIndex] += customer
  }

  // console.log(tillsArr[0])
  // console.log(tillsArr)
  return Math.max(...tillsArr)
}

console.log(queueTime([5,3,4], 1))
// should return 12
// because when there is 1 till, the total time is just the sum of the times

console.log(queueTime([10,2,3,3], 2))
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.
/*
0 0
10 2
10 5
10 8
*/
console.log(queueTime([2,3,10], 2))
// should return 12
/*
0  0
2  3
12 3
*/

console.log(queueTime([7,3,10,4,6,2,15,3,8], 3))
// should return 24
// till times:
// 1: 7+6+8 TOTAL=21
// 2: 3+4+2+15 TOTAL=24***
// 3: 10+3 TOTAL=13