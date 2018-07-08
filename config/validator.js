'use strict';

function processDevelopment() {
  return ['NODE_ENV']
}

function processProduction() {
  return ['NODE_ENV']
}

function throwError(variableName) {
  throw new Error(`Environment variable ${name} is missing.`)
}

function process(environmentVariables) {
  environmentVariables.forEach((name) => {
    if(!process.env[name]) {
      throwError(name)
    } 
  })
}

module.exports = {
  validateEnvironmentProcess: function() {
    const env = process.env.NODE_ENV;

    if(!!!env) {
      throwError('NODE_ENV')
    } else {
      if(env === 'development') {
        process(processDevelopment())
      } else {
        process(processProduction());
      }
    }
  }
}
