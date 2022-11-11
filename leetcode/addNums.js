/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// const addTwoNumbers = function(l1, l2) {
//   let carry = 0
//   let head = new ListNode(0)
//   let prev = head
  
//       console.log(carry)
//       console.log(head)
//       console.log(prev)
  
//   while(l1||l2||carry){

//       let sum = carry
//       if(l1) {
//           sum += l1.val
//           l1 = l1.next
//       }
//       if(l2) {
//           sum += l2.val
//           l2 = l2.next
//       }
//       if (sum>9) {
//           carry = 1
//           sum = sum % 10
//       } else {
//           carry = 0
//       }
//       const node = new ListNode(sum)
//       prev.next = node
//       prev = node
      
//       console.log("carry", carry)
//       console.log("head", head)
//       console.log("prev", prev)
      
//   }
//   return head.next
// };
// l1 = new ListNode(2, [4, 3])
// l2 = new ListNode(5, [6, 4])
// console.log(addTwoNumbers(l1,l2), "should be [7,0,8]")

// this solution does not use linked lists, instead, just simple arrays
const { performance } = require('perf_hooks');
const startTime = performance.now()

const addTwoNumbers = function(l1, l2) {
  const num1 = l1.reverse().reduce((prev, curr) => prev.toString() + curr.toString())
  const num2 = l2.reverse().reduce((prev, curr) => prev.toString() + curr.toString())
  let sum = Number(num1) + Number(num2)
  return sum.toString().split("").reverse().map(e => Number(e))
};

console.log(addTwoNumbers([2,4,3],[5,6,4]), "should be [7,0,8]")

const endTime = performance.now()
console.log(`Execution time: ${endTime - startTime} milliseconds`)