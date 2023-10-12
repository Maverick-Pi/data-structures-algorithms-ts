/**************************************************************************/ /**
 * @file src\stack\stack.d.ts
 * @desc 栈接口
 *
 * @author Mingjie Pi
 * @date 2023-10-12 19:36:11
 ******************************************************************************/

interface Stack<E> {
  /**
   * 向栈顶压入元素
   * @param value 待压入的值
   * @returns 压入成功返回 true，否则返回 false
   */
  push: (value: E) => boolean

  /**
   * 从栈顶弹出元素
   * @returns 栈非空返回栈顶元素，栈空返回 null
   */
  pop: () => E | null

  /**
   * 获取栈顶元素
   * @returns 栈非空返回栈顶元素，栈空返回 null
   */
  peek: () => E | null

  /**
   * 判断栈是否为空
   * @returns 栈空返回 true，非空返回 false
   */
  isEmpty: () => boolean

  /**
   * 判断栈是否已满
   * @returns 栈满返回 true，否则返回 false
   */
  isFull: () => boolean
}
