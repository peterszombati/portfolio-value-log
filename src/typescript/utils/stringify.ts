export function stringify(obj: any, keys: string[]): string {
  const str: string[] = []

  for (const key of keys) {
    if (typeof obj[key] === 'string') {
      str.push(obj[key])
    } else if (typeof obj[key] === 'number') {
      str.push(obj[key])
    } else if (typeof obj[key] === 'boolean') {
      str.push(obj[key])
    } else {
      str.push('')
    }
  }

  return str.join(';')
}
