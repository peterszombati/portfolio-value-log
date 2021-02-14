const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

const logs = ['cash','cfd','crypto','stock']

function isValid(id, directory) {
    let error = false
    if (!fs.existsSync(path.join(process.cwd(), directory, `${id}.csv`))) {
        console.error(`${path.join(process.cwd(), directory, `${id}.csv`)} file not exists`)
        error = true
    }
    if (!fs.existsSync(path.join(process.cwd(), directory, `${id}_blockchain.csv`))) {
        console.error(`${path.join(process.cwd(), directory, `${id}_blockchain.csv`)} file not exists`)
        error = true
    }

    if (error) {
        return false
    }

    const content = fs.readFileSync(path.join(process.cwd(), directory, `${id}.csv`)).toString().split(/\r?\n/).filter(l => l.length > 0)
    const blockchain = fs.readFileSync(path.join(process.cwd(), directory, `${id}_blockchain.csv`)).toString().split(/\r?\n/).filter(l => l.length > 0)
    if (content.length === 0) {
        return true
    }

    if (blockchain.length < content.length) {
        return false
    }

    let previousHash = null
    for (let i = 0; i < content.length; i++) {
        // a_hash
        const elements = content[i].trim().split(';')
        const a_hash = elements[0]

        // b_hash
        const data = elements.slice(1).join(';')
        const data_hash = sha256hash(data)
        const b_hash = previousHash
            ? sha256hash(previousHash + data_hash)
            : data_hash

        if (a_hash !== b_hash) {
            return false
        }

        previousHash = b_hash
    }

    return true
}

function start(type) {
    let error = false
    for (const id of logs) {
        if (!isValid(id, path.join('log', type))) {
            console.error(id + ': is invalid blockchain')
            error = true
        }
    }
    if (error) {
        setTimeout(() => process.exit(1), 1000)
    } else {
        console.log('Valid')
        setTimeout(() => process.exit(0), 1000)
    }
}

function sha256hash(str) {
    const hash = crypto.createHash('sha256')
    hash.update(str)
    return hash.digest('hex')
}

start('real')