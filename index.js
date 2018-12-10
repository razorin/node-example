const http = require('http');
const args = require('minimist')(process.argv.slice(2));

const hostname = "127.0.0.1";
const port = args['port'] || 3000;
let content = args['content'] || "Hello World!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text-plain');
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
})
