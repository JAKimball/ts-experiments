/**
 * Given two sorted arrays nums1 and nums2 of size m and n
 * respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * From: https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * @export
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const midPoint = (nums1.length + nums2.length) / 2
  midPoint

  const result = 2.5

  return result
}

let nums1 = [1, 3]
let nums2 = [2]
let median = findMedianSortedArrays(nums1, nums2)
median

nums1 = [1, 2]
nums2 = [3, 4]
median = findMedianSortedArrays(nums1, nums2)
median
