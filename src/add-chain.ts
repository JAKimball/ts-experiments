const add = (...args: number[]) => {
  let sum = 0
  const adder = (...args: number[]) => {
    for (const item of args) sum += item
    return adder
  }
  adder.valueOf = () => sum
  return adder(...args)
}

// in-source test suites
// if (import.meta.vitest) {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { it, expect, describe, assert } = import.meta.vitest
//   describe('"add" function', () => {
//     // it.each([[[3], 3], [[], 0], [[1, 3], 3], [[2, 30, 10], 4]])(
//     //   'Evaluate to the sum of arguments',
//     //   (input, expected) => {
//     //     expect(+add(...input)).toBe(expected)
//     //   }
//     // )// TODO: Report bug where vitest extension miscounts tests when it.each is used.
//     it('return a function', () => {
//       expect(add()).toBeInstanceOf(Function)
//     })
//     // it.each([[+add()()], 0])('Chaining partials work correctly', (input, expected) => {
//     //   expect(input).toBe(expected)
//     // })
//     it('Evaluate to the sum of arguments', () => {
//       expect(+add()).toEqual(0)
//       expect(+add(10)).toEqual(10)
//       expect(+add(10, 20)).toEqual(30)
//       expect(+add(10)(20)).toEqual(30)
//       expect(+add(10, 20, 6)).toEqual(36)
//       expect(+add(10, 20, 6, 6)).toEqual(42)
//       expect(+add(10, 20, 6)(6)).toEqual(42)
//       expect(+add(10, 20)(6, 6)).toEqual(42)
//       expect(+add(10)(20, 6, 6)).toEqual(42)
//       expect(+add(10, 20)(6)(6)).toEqual(42)
//       expect(+add(10)(20)(6)(6)).toEqual(42)
//       expect(+add(10)(20)(6)(6)()).toEqual(42)
//       expect(+add()(10)(20)(6)(6)).toEqual(42)
//     })
//   })
// }
