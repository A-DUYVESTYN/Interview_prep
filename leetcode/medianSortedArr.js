/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).


const findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const len = m + n
  const merged = []
  let i1 = 0
  let i2 = 0
  while (merged.length < ((m+n)/2 + 1)) {
    // console.log(merged,i1,i2)
    if (i1 >= m) {merged.push(...nums2.slice(i2)); break}
    if (i2 >= n) {merged.push(...nums1.slice(i1)); break}

    if (nums1[i1] <= nums2[i2]) {merged.push(nums1[i1]); i1++}
    else {merged.push(nums2[i2]); i2++}
  }
  // console.log("merged", merged)
  const medianIndex = Math.floor((len - 1) / 2)
  // console.log("medianIndex:", medianIndex)
  return (len % 2 === 0) ? (merged[medianIndex] + merged[medianIndex+1]) / 2 : merged[medianIndex]
};

console.log(findMedianSortedArrays([1,2],[3,4]), "should return 2.5")
console.log(findMedianSortedArrays([1,2],[10,11,12,13,14]), "should return 11")
console.log(findMedianSortedArrays([0,0],[0,0]), "should return 0")
console.log(findMedianSortedArrays([2],[]), "should return 2")
console.log(findMedianSortedArrays([100001],[100000]), "should return 100000.5")
// this is essentially O(n), how to get complexity O(log (m+n)).