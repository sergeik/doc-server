# Angular project documentation server

## Prerequests

 - Node.js and NPM
 - grunt
 
 
## Installation
  - Clone project
  - Install node.js dependencies:
  
  ```
  npm install
  ```
  
  - Create custom configuration file /config/custom.js and specify path to the Angular Javascript folders
  
  ```javascript
  module.exports = {
      angularJS : [
          'c:/workspace/project/modules/**/*.js',
          'c:/workspace/project/directives/**/*.js',
          'c:/workspace/project/filters/**/*.js',
          'c:/workspace/project/services/**/*.js'
      ]
  };
  ```
  
  - Execute ```grunt``` in command line
  - Open browser in http://localhost:8000
  