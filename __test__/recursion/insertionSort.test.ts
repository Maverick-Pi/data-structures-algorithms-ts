/**************************************************************************/ /**
 * @file __test__\recursion\insertionSort.test.ts
 * @desc 测试递归实现插入排序
 *
 * @author Mingjie Pi
 * @date 2023-10-09 11:50:36
 ******************************************************************************/

import { insertionSort } from '@/recursion/insertionSort'

test('recursion version of insertion sort', () => {
  const arr1 = [5, 4, 3, 2, 1]
  insertionSort(arr1)
  expect(arr1).toEqual([1, 2, 3, 4, 5])

  const arr2 = [4, 5, 3, 2, 1]
  insertionSort(arr2)
  expect(arr2).toEqual([1, 2, 3, 4, 5])

  const arr3 = [3, 1, 4, 2, 5]
  insertionSort(arr3)
  expect(arr3).toEqual([1, 2, 3, 4, 5])
})
