export const beeramid = (bonus: number, price: number): number => {
  let cans = Math.floor(bonus / price)
  let rows = 0
  let level = 1
  while (cans >= 0) {
    cans -= level ** 2
    level++
    if (cans >= 0) rows++
  }
  return rows
}
