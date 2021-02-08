const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

const logs = ['cash','cfd','crypto','stock']

function isValid(id) {
    let error = false
    if (!fs.existsSync(path.join(process.cwd(), 'log', `${id}.csv`))) {
        console.error(`${console.error(path.join(process.cwd(), 'log', `${id}.csv`))} file not exists`)
        error = true
    }
    if (!fs.existsSync(path.join(process.cwd(), 'log', `${id}_blockchain.csv`))) {
        console.error(`${console.error(path.join(process.cwd(), 'log', `${id}_blockchain.csv`))} file not exists`)
        error = true
    }

    if (error) {
        return false
    }

    const content = fs.readFileSync(path.join(process.cwd(), 'log', `${id}.csv`)).toString().split(/\r?\n/).filter(l => l.length > 0)
    const blockchain = fs.readFileSync(path.join(process.cwd(), 'log', `${id}_blockchain.csv`)).toString().split(/\r?\n/).filter(l => l.length > 0)
    if (content.length === 0) {
        return true
    }

    if (blockchain.length < content.length) {
        return false
    }

    let previousHash = null
    for (let i = 0; i < content.length; i++) {
        const elements = content[i].trim().split(';')
        const content_blockhash = elements[0]
        const data = elements.slice(1).join(';')
        const blockhash = blockchain[i]
        const calculated_datahash = sha256hash(data)
        if (content_blockhash !== blockhash) {
            return false
        }
        const calculated_blockhash = previousHash
            ? sha256hash(previousHash + calculated_datahash)
            : sha256hash(calculated_datahash)
        previousHash = calculated_blockhash
        if (calculated_blockhash !== blockhash) {
            return false
        }
    }
}

function start() {
    let error = false
    for (const id of logs) {
        if (!isValid(id)) {
            console.error(id + ': is invalid blockchain')
            error = true
        }
    }
    if (error) {
        process.exit(1)
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

start()