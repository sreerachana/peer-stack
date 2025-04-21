
// VERSIONS
const npmVersion = '8.5.1';
const nodeVersion  = 'v12.22.9';

// GLOBAL
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process);
console.log(require);



// 📦 Project Root
// │
// ├── 📁 DB                                   # Database-related logic
// │   ├── 📁 migration                        # Migration scripts for DB setup
// │   ├── 📁 config                           # DB connection and configs
// │   └── 📁 modules                          # Organized DB modules/schemas
// │
// ├── 📁 UTILITIES                            # Reusable helper functions
// │   ├── 📄 status-message.js                # Common status messages
// │   └── 📄 validation.js                    # Input validation logic
// │
// ├── 📁 SERVICES                             # Shared service files
// │   ├── 📄 aws-service.service.js           # AWS-related functions
// │   ├── 📄 jwt-service.service.js           # Token sign/verify logic
// │   ├── 📄 logger.service.js                # Centralized logging
// │   └── 📄 responseHandler.service.js       # Uniform API responses
// │
// ├── 📁 scripts                              # Automation shell scripts
// │   ├── 📄 serverSetup.sh                   # Script to set up server
// │   └── 📄 dropDB.sh                        # Script to drop the DB
// │
// ├── 📁 config                               # Server/environment configs
// │   ├── 📄 index.js                         # Combined config exports
// │   └── 📄 server.js                        # Server-related settings
// │
// ├── 📁 APP                                  # Main application code
// │   └── 📁 user                             # User module
// │       ├── 📄 index.js                     # Exports user module parts
// │       ├── 📄 user.controller.js           # Handles user logic
// │       ├── 📄 user.request.js              # Validates user input
// │       ├── 📄 user.route.js                # Defines user routes
// │       ├── 📄 user.spec.js                 # Test cases for user module
// │       └── 📄 user.service.js              # User-specific services
// │
// ├── 📄 index.js                             # App entry point
// └── 📄 package.json                         # Project metadata & dependencies


// Create Your Own Modules

// You can create your own modules, and easily include them in your applications.

// The following example creates a module that returns a date and time object:
// Example

// Create a module that returns the current date and time:
// exports.myDateTime = function () {
//   return Date();
// };

// Use the exports keyword to make properties and methods available outside the module file.

// Save the code above in a file called "myfirstmodule.js"

// Include Your Own Module

// Now you can include and use the module in any of your Node.js files.
// Example

// Use the module "myfirstmodule" in a Node.js file:
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.

// Save the code above in a file called "demo_module.js", and initiate the file:

// Initiate demo_module.js:
// C:\Users\Your Name>node demo_module.js

// If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080

  






