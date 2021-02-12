import * as crypto from 'crypto'

export function sha256hash(str) {
  const hash = crypto.createHash('sha256')
  hash.update(str)
  return hash.digest('hex')
}
