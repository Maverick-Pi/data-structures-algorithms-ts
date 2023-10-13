/**************************************************************************/ /**
 * @file src\deque\deque.d.ts
 * @desc 双端队列接口
 *
 * @author Mingjie Pi
 * @date 2023-10-13 16:04:01
 ******************************************************************************/

interface Deque<E> {
  /**
   * 向队列前端添加元素
   * @param e 添加元素值
   * @returns 添加成功返回 true，失败返回 false
   */
  unshift: (e: E) => boolean

  /**
   * 向队列后端添加元素
   * @param e 添加元素值
   * @returns 添加成功返回 true，失败返回 false
   */
  enqueue: (e: E) => boolean

  /**
   * 删除队列前端的元素
   * @returns 删除成功返回被删除元素值，否则返回 null
   */
  dequeue: () => E | null

  /**
   * 删除队列后端的元素
   * @returns 删除成功返回被删除元素的值，否则返回 null
   */
  popBack: () => E | null

  /**
   * 获取队列前端元素的值
   * @returns 返回队列前端元素的值
   */
  peekFront: () => E | null

  /**
   * 获取队列后端元素的值
   * @returns 返回队列后端元素的值
   */
  peekBack: () => E | null

  /**
   * 判断队列是否为空
   * @returns 队列为空返回 true，非空返回 false
   */
  isEmpty: () => boolean

  /**
   * 判断队列是否满了
   * @returns 队列满返回 true，未满返回 false
   */
  isFull: () => boolean
}
