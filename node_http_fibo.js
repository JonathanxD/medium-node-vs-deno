const http = require('http');

const hostname = '127.0.0.1';
const port = 3090;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  fibonacci(40);
  res.end('Fibo!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}
