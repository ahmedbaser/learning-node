// this is normal way
// const myModule = require('./local-1')

// this is smart way called destructing
const {a, add} = require('./local-1')
const {a:a2, add:add2} = require('./local-2')
console.log(add2(3, 4, 5))
