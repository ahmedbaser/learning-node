const http = require('http');

const fs = require('fs');

//creating a server usign row node.js
const server = http.createServer()

//Listener --> for listining i have to use [on]
//[request--> called-> request even]
server.on('request', (req, res) => {
  if(req.url === '/read-file' && req.method === 'GET');
   
  // streaming file reading
  
  const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
  
  readableStream.on('data', (buffer) => {
    res.statusCode = 200;
    res.write(buffer)
  })

  readableStream.on('end', () => {
    res.statusCode = 200;
    res.end('The streaming is over')
  })

  readableStream.on('error', (error)=> {
    console.log(error)
    res.statusCode = 500;
    res.end("somthing wnet wrong")
  })
  
})

server.listen(5000, () => {
    console.log(`srever is listening on port 5000`)
}) 

/// These above all of code is row node.js code
/* We haven't use this row node.js code because it maximize code length instead of this I us [Express] for better efficient
 */
