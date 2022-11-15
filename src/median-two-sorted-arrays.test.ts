// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { assert, describe, expect, it } from 'vitest'
import { findMedianSortedArrays } from './median-two-sorted-arrays.js'

describe('"findMedianSortedArrays" function', () => {
  it('Case 1', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2)
  })

  it('Case 2', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5)
  })
})
