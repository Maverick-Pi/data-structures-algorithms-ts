/**************************************************************************/ /**
 * @file src\recursion\pascalTriangleOptimize.ts
 * @desc 一维数组记忆法优化杨辉三角
 *
 * @author Mingjie Pi
 * @date 2023-10-10 13:26:35
 ******************************************************************************/

/**
 * 根据前一行求下一行
 * @param row 记录行
 * @param i 所在行数
 */
function createRow(row: number[], i: number): void {
  if (i === 0) {
    row[0] = 1
    return
  }
  for (let j = i; j > 0; j--) {
    row[j] = row[j] + row[j - 1]
  }
}

/**
 * 打印杨辉三角
 * @param n 总行数
 */
function triangle(n: number): void {
  const row: number[] = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    createRow(row, i)
    space(n, i)
    for (let j = 0; j <= i; j++) {
      process.stdout.write(row[j].toString().padEnd(6))
    }
    console.log('')
  }
}

/**
 * 打印空格，格式化展示
 * @param n 总行数
 * @param i 所在行数
 */
function space(n: number, i: number): void {
  const num = (n - i - 1) * 3
  for (let j = 0; j < num; j++) {
    process.stdout.write(' ')
  }
}

triangle(15)
