/**************************************************************************/ /**
 * @file src\recursion\pascalTriangle.ts
 * @desc 杨辉三角
 *             1                              1
 *           1   1                            1   1
 *         1   2   1                          1   2   1
 *       1   3   3   1            ==>         1   3   3   1
 *     1   4   6   4   1                      1   4   6   4   1
 *   1   5  10  10   5   1                    1   5   10  10  5   1
 * 1   6  15  20  15   6   1                  1   6   15  20  15  6   1
 *
 * @author Mingjie Pi
 * @date 2023-10-10 12:01:30
 ******************************************************************************/

function element(triangle: number[][], i: number, j: number): number {
  if (triangle[i][j] !== undefined) {
    return triangle[i][j]
  }

  if (j === 0 || i === j) {
    triangle[i][j] = 1
    return 1
  }
  triangle[i][j] = element(triangle, i - 1, j - 1) + element(triangle, i - 1, j)
  return triangle[i][j]
}

function space1(n: number, i: number): void {
  const num = (n - i - 1) * 3
  for (let j = 0; j < num; j++) {
    process.stdout.write(' ')
  }
}

function pascalTriangle(n: number): void {
  const triangle: number[][] = new Array(n)

  console.log('')
  for (let i = 0; i < n; i++) {
    triangle[i] = new Array(i + 1)
    space1(n, i)
    for (let j = 0; j <= i; j++) {
      process.stdout.write(element(triangle, i, j).toString().padEnd(6))
    }
    process.stdout.write('\n')
  }
  console.log('')
}

pascalTriangle(20)
