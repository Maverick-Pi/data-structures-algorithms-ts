/**************************************************************************/ /**
 * @file __test__\binarySearch\leftmost.test.ts
 * @desc 测试二分查找，保留最左边的值
 *
 * @author Mingjie Pi
 * @date 2023-09-30 17:33:00
 ******************************************************************************/

import { binarySearchLeftmost } from '@/binarySearch/leftmost'

// 待查数组   0  1  2  3  4  5  6  7
const arr = [1, 2, 4, 4, 4, 5, 6, 7]

// 测试
test('Binary Search Leftmost Test', () => {
  // 找到了测试用例
  expect(binarySearchLeftmost(arr, 1)).toBe(0)
  expect(binarySearchLeftmost(arr, 2)).toBe(1)
  expect(binarySearchLeftmost(arr, 4)).toBe(2)
  expect(binarySearchLeftmost(arr, 5)).toBe(5)
  expect(binarySearchLeftmost(arr, 6)).toBe(6)
  expect(binarySearchLeftmost(arr, 7)).toBe(7)
  // 没找到测试用例
  expect(binarySearchLeftmost(arr, 0)).toBe(0)
  expect(binarySearchLeftmost(arr, 3)).toBe(2)
  expect(binarySearchLeftmost(arr, 9)).toBe(8)
})
