/**
 * @file __test__\binarySearch\basic.test.ts
 * @desc 测试基础版二分查找
 *
 * @author Mingjie Pi
 * @date 2023-09-29 11:11:30
 */

import { binarySearchBasic } from '@/binarySearch/basic'

// 待查数组   0  1   2   3   4   5   6   7
const arr = [7, 13, 21, 30, 38, 44, 52, 53]

// 测试——能够找到目标值
test('Binary Search Test Pass', () => {
  expect(binarySearchBasic(arr, 7)).toBe(0)
  expect(binarySearchBasic(arr, 13)).toBe(1)
  expect(binarySearchBasic(arr, 21)).toBe(2)
  expect(binarySearchBasic(arr, 30)).toBe(3)
  expect(binarySearchBasic(arr, 38)).toBe(4)
  expect(binarySearchBasic(arr, 44)).toBe(5)
  expect(binarySearchBasic(arr, 52)).toBe(6)
  expect(binarySearchBasic(arr, 53)).toBe(7)
})

// 测试——找不到目标值
test('Binary Search Test Fail', () => {
  expect(binarySearchBasic(arr, 0)).toBe(-1)
  expect(binarySearchBasic(arr, 15)).toBe(-1)
  expect(binarySearchBasic(arr, 60)).toBe(-1)
})
