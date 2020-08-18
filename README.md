# Best Test

Find the most fitting test script to run given the local environment.

## Rules

* Node version specific test script.
  * If a script named `test:node-v12` exists and the Node.js version is v12.x
    this script will be run. Same for any other Node.js major version.
* If no environment specific test script is found, `npm test` will run.
