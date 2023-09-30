/***************************************************************************/ /**
 * @file __test__\binarySearch\modify.test.ts
 * @desc 测试改动版二分查找
 *
 * @author Mingjie Pi
 * @date 2023-09-29 15:18:26
 ******************************************************************************/

import { binarySearchModify } from '@/binarySearch/modify'

// 待查数组   0  1   2   3   4   5   6   7
const arr = [7, 13, 21, 30, 38, 44, 52, 53]

// 测试——能够找到目标值
test('Binary Search Test Pass', () => {
  expect(binarySearchModify(arr, 7)).toBe(0)
  expect(binarySearchModify(arr, 13)).toBe(1)
  expect(binarySearchModify(arr, 21)).toBe(2)
  expect(binarySearchModify(arr, 30)).toBe(3)
  expect(binarySearchModify(arr, 38)).toBe(4)
  expect(binarySearchModify(arr, 44)).toBe(5)
  expect(binarySearchModify(arr, 52)).toBe(6)
  expect(binarySearchModify(arr, 53)).toBe(7)
})

// 测试——找不到目标值
test('Binary Search Test Fail', () => {
  expect(binarySearchModify(arr, 0)).toBe(-1)
  expect(binarySearchModify(arr, 15)).toBe(-1)
  expect(binarySearchModify(arr, 60)).toBe(-1)
})
