export const ints = (str: string) => {
  return [...str.matchAll(/-?\d+/g)].map(match => +match[0])
}

let inputIterator: IterableIterator<string>
export const initReadLn = (input: string) => (inputIterator = input.split('\n').values())

export const readLn = (pInputIterator?: IterableIterator<string>): string | undefined => {
  return (pInputIterator ?? inputIterator).next().value
}
