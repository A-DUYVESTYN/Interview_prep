/*
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

const productArray = (input) => {
  return input.map((e,i,arr) => arr.reduce((prev, curr) => prev * curr) / e)
}


console.log(productArray([10,3,5,6,2])) // return ==> [180,600,360,300,900]