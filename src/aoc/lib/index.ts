export const ints = (str: string) => {
  return [...str.matchAll(/-?\d+/g)].map(match => +match[0])
}
