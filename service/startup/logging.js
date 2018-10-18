const winston = require('winston')
require('express-async-errors')

module.exports = function(){
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true}),
    new winston.transports.File({ filename: 'uncaughtExceptions.log'}))

    process.on('unhandledRejection', (ex) => {
      winston.error(ex.message, ex)
      process.exit(1)
    })

    winston.add(winston.transports.File, { filename: 'logfile'})
}
