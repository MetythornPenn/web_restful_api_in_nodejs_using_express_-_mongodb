let fs = require('fs')


// let data = fs.readFileSync('example.txt')


// console.log(data.toString())
fs.readFile('example.txt', (err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data.toString())
    }
})

console.log('Program Ended')