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

const addTwoNumbers = function(l1, l2) {
  const num1 = l1.reverse().reduce((prev, curr) => prev.toString() + curr.toString())
  const num2 = l2.reverse().reduce((prev, curr) => prev.toString() + curr.toString())
  let sum = Number(num1) + Number(num2)
  return sum.toString().split("").reverse().map(e => Number(e))
};

console.log(addTwoNumbers([2,4,3],[5,6,4]), "should be [7,0,8]")

