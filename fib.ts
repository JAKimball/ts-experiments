// "use strict";

import { memoize } from "./memoize.js"

type AckermannFunction = {
  (m: number, n: bigint): bigint
}

type CountedFunction<F> = F & {
  callCount: number
}

export const ackermann: CountedFunction<AckermannFunction> = ((m: number, n: bigint) => {
  ackermann.callCount++
  if (m === 0) return n + 1n
  if (n === 0n) return ackermann(m - 1, 1n)
  return ackermann(m - 1, ackermann(m, n - 1n))
}) as CountedFunction<AckermannFunction>
ackermann.callCount = 0

export const ackermann_m = memoize((m: number, n: bigint): bigint => {
  if (m === 0) return n + 1n
  if (n === 0n) return ackermann_m(m - 1, 1n)
  return ackermann_m(m - 1, ackermann_m(m, n - 1n))
})

export const ackermann_test = (ackermann: AckermannFunction) => {
  const mArray: bigint[][] = []
  for (let m: number = 0; m <= 3; m++) {
    const nArray: bigint[] = []
    for (let n: bigint = 0n; n <= 9n; n++) {
      nArray.push(ackermann(m, n))
    }
    mArray.push(nArray)
  }
  console.table(mArray)
}

export const ackermann_tests = () => {
  console.time()
  ackermann_test(ackermann_m)
  console.timeEnd()

  console.time()
  ackermann_test(ackermann)
  console.timeEnd()
  console.log(ackermann)

  console.table([...ackermann_m.map.values()], ['result', 'hitCount', 'stackHeight', 'maxStackHeight', 'branchSize'])
  console.log(ackermann_m.stats, ackermann_m.stats.savings)
}

export const fib = memoize((n: number): bigint => {
  if (n <= 2) return 1n
  return fib(n - 2) + fib(n - 1)
})

export const testFib = () => {
  console.time()
  console.log(fib(6))
  console.log(fib(50))
  // console.log(fib(400));
  console.timeEnd()

  console.log(fib, fib.stats.savings)
}

export const hailstone = memoize((n: number): number => {
  return n <= 1 ? 1 : 1 + ((n % 2) ? hailstone(n * 3 + 1) : hailstone(n / 2))
})

export const hailstone2 = memoize((n: number): number => {
  // take advantage of the fact that an odd number always leads to an even number
  return n <= 1 ? 1 : ((n % 2) ? 2 + hailstone2((n * 3 + 1) / 2) : 1 + hailstone2(n / 2))
})

export const testHailstone = () => {
  // console.time('hailstone');
  // for (let i = 1; i <= 100; i++)
  //   console.log(`${i}: ${hailstone(i)}`);
  // console.timeEnd('hailstone');

  // console.log(hailstone);
  // console.log(hailstone2);

  // const orderPair = ([x: x, y: y])
}

export const gridTraveler = memoize((height: number, width: number): number => {
  if (height === 1 || width === 1) return 1

  const normalizeGT = (nHeight: number, nWidth: number) => {
    // Swap if height > width to leverage memoization of symmetry in the problem
    if (nHeight > nWidth) {
      let swap = nHeight; nHeight = nWidth; nWidth = swap
    }
    return gridTraveler(nHeight, nWidth)
  }

  return normalizeGT(height - 1, width) + normalizeGT(height, width - 1)
})

export const testGridTraveler = () => {
  let gt = 0
  console.time('gridTraveler')
  gt = gridTraveler(5, 5); gt
  // gt = gridTraveler(4, 4); gt
  gt = gridTraveler(18, 18); gt
  console.timeEnd('gridTraveler')

  let hc = gridTraveler.stats.hitCount; hc
  let mc = gridTraveler.stats.missCount; mc
  let total = hc + mc; total

  console.log(gridTraveler)
}

// ====================================================


export const numWays = memoize((height: number, strides: number[]): number => {
  if (height === 0) return 1
  if (height <= 0) return 0

  let ways = 0
  strides.forEach(stride => {
    ways += numWays(height - stride, strides)
  })
  return ways
})

export const testNumWays = () => {
  // console.log(numWays(0, [1, 2]));
  // console.log(numWays(1, [1, 2]));
  console.log(numWays(2, [1, 2]))
  // console.log(numWays(3, [1, 2]));
  console.log(numWays(4, [1, 2]))
  // console.log(numWays(5, [1, 2]));
  // // console.log(numWays(40, [1, 2]));
  // // console.log(fib(41));
  // console.log(numWays(50, [1, 2]));
  // // console.log(fib(51));
  // console.log(numWays.toString());

  console.log(numWays(4, [1, 3, 5]))

  console.log(fib(1))
  console.log(fib(2))
  console.log(fib(3))
  console.log(fib(4))
  console.log(fib(5))

  let ϕ = (1 + Math.sqrt(5)) / 2; ϕ
  let n = 39
  let strides = [1, 2]
  console.log(numWays(n, strides))

  let ratio = numWays(n + 1, strides) / numWays(n, strides)
  console.log(ratio)
  console.log(ratio == ϕ)

  ratio = Number(fib(41)) / Number(fib(40))
  console.log(ratio)
  console.log(ratio == ϕ)

  console.log(numWays)

  enum TestResult {
    Pass = 'Pass',
    Fail = 'Fail',
  }

  const numWays_test = (): TestResult => {
    return TestResult.Fail  // TODO: write test
  }
}

// https://youtube.com/clip/Ugy2Vl7h0w8BQHTCOKJ4AaABCQ

export const decodeStr = (coded: string): string => {
  let result = ''
  let i = 0
  let char = ''
  let repeat = 0

  while (i <= coded.length - 1) {
    if (coded[i] >= '0' && coded[i] <= '9') {
      repeat = repeat * 10 + Number(coded[i])
    } else {
      while (repeat--) {
        result += char
      }
      char = coded[i]
      result += char
      repeat = 0
    }
    i++
  }

  while (repeat--) {
    result += char
  }

  return result
}

export const encodeStr = (inStr: string): string => {
  let result = ''
  let i = 0
  let char = ''
  let repeat = 0

  while (i <= inStr.length - 1) {
    if (inStr[i] === char) {
      repeat++
    } else {
      if (repeat) {
        result += String(repeat)
        repeat = 0
      }
      char = inStr[i]
      result += char
    }
    i++
  }

  if (repeat) {
    result += String(repeat)
  }

  return result
}

let codedStr = encodeStr('abchijjklmmmmmmmmmmmmr')
console.log(codedStr)


class BTNode {
  value: any
  left: BTNode | undefined
  right: BTNode | undefined
  constructor(value: any, left?: BTNode, right?: BTNode) {
    this.value = value
    this.left = left
    this.right = right
  }

  boundary(leftSide: boolean = true, rightSide: boolean = true): any[] {
    let result: any[] = []
    let include = (leftSide)
    if (include) result.push(this.value)
    if (this.left) {
      result = result.concat(this.left.boundary(leftSide, false))
    }
    if (this.right) {
      result = result.concat(this.right.boundary(false, rightSide))
    }
    if (!include && (rightSide || (!this.left && !this.right)))
      result.push(this.value)
    return result
  }
}

export let node = new BTNode('a', new BTNode('b'), new BTNode('c'))
if (node.left) {
  node.left.left = new BTNode('d', new BTNode('h'), new BTNode('i'))
  node.left.right = new BTNode('e', new BTNode('j'), new BTNode('k'))
}
if (node.right) {
  node.right.left = new BTNode('f')
  node.right.right = new BTNode('g', new BTNode('n'), new BTNode('o'))
}

export const boundary_test = () => {
  console.log(node.boundary())
}

// export const add = (...args: number[]) => {
//   const adder = (...args: number[]) => {
//     let subTotal = 0
//     for (const item of args) subTotal += item
//     if (adder.value) adder.value += subTotal
//     else adder.value = subTotal
//   }

// }

debugger
