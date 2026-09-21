const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(process.cwd(), 'dist')
const port = Number(process.env.PORT || 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${port}`)
    let file = path.join(root, decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname))

    if (!file.startsWith(root)) {
      res.writeHead(403)
      res.end('Forbidden')
      return
    }

    fs.stat(file, (statError, stat) => {
      if (statError || !stat.isFile()) file = path.join(root, 'index.html')

      fs.readFile(file, (readError, data) => {
        if (readError) {
          res.writeHead(404)
          res.end('Not found')
          return
        }

        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' })
        res.end(data)
      })
    })
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`Static preview: http://127.0.0.1:${port}/`)
  })
