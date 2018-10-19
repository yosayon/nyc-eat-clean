require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const winston = require('winston')
const app = express()

require('./startup/logging')
require('./startup/routes')(app)
require('./startup/db')()


const port = process.env.PORT || 3001;
app.listen(port, () => winston.info(`Listening on port ${port}...`))
