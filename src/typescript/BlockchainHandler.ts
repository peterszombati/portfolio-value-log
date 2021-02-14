import * as fs from 'fs'
import * as _path from 'path'
import {Blockchains} from './types/Blockchain'
import {stringify} from './utils/stringify'
import {sha256hash} from './utils/sha256hash'
import {Files} from './types/Files'

export class BlockchainHandler<T> {

  private files: Files = {}
  private keys: string[]
  private blockchain: Blockchains = {}

  constructor(files: string[], keys: string[]) {
    files.forEach(file => {
      const name = _path.basename(file).split('.csv')[0]
      this.files[name] = {
        path: _path.dirname(file),
        name
      }
      this.blockchain[name] = []
    })

    this.keys = keys

    for (const i of Object.keys(this.files)) {
      this.load(this.files[i].path, this.files[i].name)
    }

    return this
  }

  private load(path: string, name: string) {
    const chainFile = _path.join(path, name + '_blockchain.csv')
    const dataFile = _path.join(path, name + '.csv')

    if (!fs.existsSync(dataFile)) {
      throw new Error(`${dataFile}: is not exists`)
    }

    if (!fs.existsSync(chainFile)) {
      throw new Error(`${chainFile}: is not exists`)
    }

    const data = fs.readFileSync(dataFile).toString().split(/\r?\n/).filter(l => l.length > 0)
    // TODO load all data ?
    if (data.length > 0) {
      const elements = data.slice(-1)[0].split(';')
      this.blockchain[name].push({
        blockhash: elements[0].trim(),
        data: elements.slice(1).join(';')
      })
    }
  }

  push(name: string, data: T) {
    if (!this.blockchain[name]) {
      throw new Error('this blockchain is not initialized')
    }

    const str = stringify(data, this.keys)
    const hash = sha256hash(str)

    const blockhash = this.blockchain[name].length > 0
      ? sha256hash(this.blockchain[name].slice(-1)[0].blockhash + hash)
      : hash

    this.blockchain[name].push({
      blockhash,
      data: str
    })

    fs.appendFileSync(_path.join(this.files[name].path, this.files[name].name + '_blockchain.csv'), blockhash + '\n')
    fs.appendFileSync(_path.join(this.files[name].path, this.files[name].name + '.csv'), `${blockhash};${str}` + '\n')
  }
}
