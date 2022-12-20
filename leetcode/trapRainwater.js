// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

//make 2 arrays cataloguing the maximum height to the left of i, and the maximum height to the right of i (including i). Iterate through height array and detemine the minimum containment using the min of the left and right height arrays, add the volume of water for that element to the cumulateve volume variable.

const trap = function(height) {
  let output = 0
  const len = height.length
  const max_h_left = []
  const max_h_right = []

  max_h_left[0] = height[0]
  for(let i=1; i<len; i++) {
    max_h_left[i] = Math.max(height[i], max_h_left[i-1])
  }
  max_h_right[len-1] = height[len-1]
  for(let i=len-2; i>=0; i--) {
    max_h_right[i] = Math.max(height[i], max_h_right[i+1])
  }
  for(let i=1;i<len-1;i++) {
    let water = (Math.min(max_h_left[i],max_h_right[i]) - height[i]) 
    output += water
  }
  return output
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]),"should be 6")
console.log(trap([4,2,0,3,2,5]),"should be 9")
console.log(trap([4,2,3]),"should be 1")

