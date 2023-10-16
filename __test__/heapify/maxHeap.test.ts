/**************************************************************************/ /**
 * @file __test__\heapify\maxHeap.test.ts
 * @desc 测试大顶堆
 *
 * @author Mingjie Pi
 * @date 2023-10-16 19:43:01
 ******************************************************************************/

import { MaxHeap } from '@/heapify/maxHeap'

describe('Max Heap', () => {
  test('heapify', () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
    const maxHeap = new MaxHeap(arr)
    console.log(maxHeap.getArray())
    expect(maxHeap.getArray()).toEqual([7, 5, 6, 4, 2, 1, 3])
  })
})
