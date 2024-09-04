const { readFileSync,writeFileSync } = require("fs")
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// Kad dodamo flag 'a' znaci append, dodaje na tekst koji postoji

writeFileSync('./content/result-sync.html',
    `Here is the result 2: ${first}, ${second}`,
    {flag:'a'}
)

console.log('done with this task')
console.log('starting the next one')