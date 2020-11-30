#!/usr/bin/env node

const http = require('http')

const requestListener = function (req, res) {
  res.writeHead(200)
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Sample webapp</title>

        <style>
          body {
            padding: 24px;
            // Uncomment the following line to colors
            // color: ${process.env.COLOR || 'initial'}
          }
        </style>
      </head>
      <body>
          <p>Hello ${process.env.GREETING || 'unknown'}!</p>
      </body>
    </html>
  `)
}

const server = http.createServer(requestListener)
server.listen(8080, () => {
  console.log(`Listening on port 8080`)
})
