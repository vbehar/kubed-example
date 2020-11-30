#!/usr/bin/env node

const http = require('http')

const requestListener = function (req, res) {
  res.writeHead(200)
  res.end('Backend')
}

const server = http.createServer(requestListener)
server.listen(8080, () => {
  console.log(`Listening on port 8080`)
})
