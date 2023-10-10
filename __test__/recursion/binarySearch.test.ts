/**************************************************************************/ /**
 * @file __test__\recursion\binarySearch.test.ts
 * @desc 测试递归实现二分查找
 *
 * @author Mingjie Pi
 * @date 2023-10-08 23:02:17
 ******************************************************************************/

import { binarySearch } from '@/recursion/binarySearch'

test('recursion version of binary search', () => {
  const arr = [7, 13, 21, 30, 38, 44, 52, 53]

  expect(binarySearch(arr, 7)).toBe(0)
  expect(binarySearch(arr, 13)).toBe(1)
  expect(binarySearch(arr, 21)).toBe(2)
  expect(binarySearch(arr, 30)).toBe(3)
  expect(binarySearch(arr, 38)).toBe(4)
  expect(binarySearch(arr, 44)).toBe(5)
  expect(binarySearch(arr, 52)).toBe(6)
  expect(binarySearch(arr, 53)).toBe(7)

  expect(binarySearch(arr, 0)).toBe(-1)
  expect(binarySearch(arr, 31)).toBe(-1)
  expect(binarySearch(arr, 99)).toBe(-1)
})
