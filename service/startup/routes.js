const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

module.exports = function(app){
  app.use(express.json())
  app.use(helmet())
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
}
