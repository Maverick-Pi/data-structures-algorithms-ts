/**************************************************************************/ /**
 * @file __test__\binarySearch\rightmost.test.ts
 * @desc 测试二分查找重复元素取最右侧值
 *
 * @author Mingjie Pi
 * @date 2023-09-30 18:41:26
 ******************************************************************************/

import { binarySearchRightmost } from '@/binarySearch/rightmost'

// 待查数组   0  1  2  3  4  5  6  7
const arr = [1, 2, 4, 4, 4, 5, 6, 7]

// 测试
test('Binary Search Rightmost Test', () => {
  // 找到了测试用例
  expect(binarySearchRightmost(arr, 1)).toBe(0)
  expect(binarySearchRightmost(arr, 2)).toBe(1)
  expect(binarySearchRightmost(arr, 4)).toBe(4)
  expect(binarySearchRightmost(arr, 5)).toBe(5)
  expect(binarySearchRightmost(arr, 6)).toBe(6)
  expect(binarySearchRightmost(arr, 7)).toBe(7)
  // 没找到测试用例
  expect(binarySearchRightmost(arr, 0)).toBe(-1)
  expect(binarySearchRightmost(arr, 3)).toBe(1)
  expect(binarySearchRightmost(arr, 9)).toBe(7)
})
