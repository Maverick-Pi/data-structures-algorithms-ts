/**************************************************************************/ /**
 * @file __test__\recursion\bubbleSort.test.ts
 * @desc 测试递归实现冒泡排序
 *
 * @author Mingjie Pi
 * @date 2023-10-08 23:37:42
 ******************************************************************************/

import { bubbleSort } from '@/recursion/bubbleSort'

test('recursion version of bubble sort', () => {
  const arr1 = [7, 4, 65, 2, 4, 58, 12, 34]
  bubbleSort(arr1)
  expect(arr1).toEqual([2, 4, 4, 7, 12, 34, 58, 65])
})
