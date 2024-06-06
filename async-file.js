const fs = require('fs')

// reading text asynchronously

/* to avoid [buffer] and want to see the  read.txt file as letter have to use [utf-8]*/
fs.readFile('./texts/read.txt','utf-8', (err, data)=> {
  if(err) {
    throw Error('Error reading text')
  }  

  // writing text asynchronously
  fs.writeFile('./texts/read2.txt', data,'utf-8', (err)=> {
    if(err) {
        throw Error('Error writing data')
    }
  })
})

console.log("testing asynchronous");