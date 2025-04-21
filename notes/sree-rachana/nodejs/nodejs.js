// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('SREE RACHANA');
// }).listen(8080); 



// const http = require('http');
 
// // Create a basic HTTP server
// const server = http.createServer((req, res) => {
//   // Set response headers
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // Send response
//   res.end('Hello, this is your sree rachana from Node.js server!');
// });
 
// // Start the server on port 3000
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });

//404 - error (not found)
//400 - bad request
//200 - success
//201 - success created
//500 - internall server error

// const http = require('http');
// const server = http.createServer((req, res) => {
//     const { url, method } = req;
   
//     // Handle different routes
//     if (url === '/' && method === 'GET') {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end('<h1>Home Page</h1>');
//     } 
//     else if (url === '/about' && method === 'GET') {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end('<h1>About Us</h1>');
//     } 
//     else {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       res.end('<h1>404 Not Found</h1>');
//     }
//   });

//   server.listen(3000, () => {
//       console.log('Server running at http://localhost:3000');
//     });

