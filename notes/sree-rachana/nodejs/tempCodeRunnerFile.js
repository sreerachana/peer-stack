const http = require('http');
 
// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send response
  res.end('Hello, this is your sree rachana from Node.js server!');
});
 
// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});