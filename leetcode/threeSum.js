/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. 
*/


function arrayEquals(a, b) {
  return a.every((val, index) => val === b[index]);
}

const checkForDuplicates = (newTriplet,currOutput) => {
  for(currentTriplet of currOutput) { 
    if (arrayEquals(currentTriplet,newTriplet)) return true
  }
  return false
}

const threeSum = function(nums) {
  const output = []
  const length = nums.length
  nums.sort((a,b) => a - b)
  for (let i=0; i<length-2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j=i+1; j<length-1; j++) {
      for (let k=j+1; k<length; k++) {
        const newTriplet = [nums[i],nums[j],nums[k]]
        if (newTriplet.reduce((a,b)=>a+b) === 0 && !checkForDuplicates(newTriplet,output)) {
          output.push(newTriplet)
        }     
      }
    }
  }
  return output
};

console.log(threeSum([-1,0,1,2,-1,-4]), "should equal [[-1,-1,2],[-1,0,1]]")
console.log(threeSum([0,1,1]), "should equal []")
console.log(threeSum([0,0,0]), "should equal [0,0,0]")
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]), "should equal [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]")

