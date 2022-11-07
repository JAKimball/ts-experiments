export const add = (...args: number[]) => {
  let sum = 0
  const adder = (...args: number[]) => {
    for (const item of args) sum += item
    return adder
  }
  adder.valueOf = () => sum
  return adder(...args)
}
