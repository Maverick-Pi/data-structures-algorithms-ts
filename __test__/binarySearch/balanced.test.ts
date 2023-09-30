/***************************************************************************/ /**
 * @file __test__\binarySearch\balanced.test.ts
 * @desc 测试二分查找平衡版
 *
 * @author Mingjie Pi
 * @date 2023-09-30 13:57:24
 ******************************************************************************/

import { binarySearchBalanced } from '@/binarySearch/balanced'

// 待查数组   0  1   2   3   4   5   6   7
const arr = [7, 13, 21, 30, 38, 44, 52, 53]

// 测试——能够找到目标值
test('Binary Search Test Pass', () => {
  expect(binarySearchBalanced(arr, 7)).toBe(0)
  expect(binarySearchBalanced(arr, 13)).toBe(1)
  expect(binarySearchBalanced(arr, 21)).toBe(2)
  expect(binarySearchBalanced(arr, 30)).toBe(3)
  expect(binarySearchBalanced(arr, 38)).toBe(4)
  expect(binarySearchBalanced(arr, 44)).toBe(5)
  expect(binarySearchBalanced(arr, 52)).toBe(6)
  expect(binarySearchBalanced(arr, 53)).toBe(7)
})

// 测试——找不到目标值
test('Binary Search Test Fail', () => {
  expect(binarySearchBalanced(arr, 0)).toBe(-1)
  expect(binarySearchBalanced(arr, 15)).toBe(-1)
  expect(binarySearchBalanced(arr, 60)).toBe(-1)
})
