const mongoose = require('mongoose')
const winston = require('winston')

module.exports = function(){
  mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ds161614-a0.mlab.com:61614,ds161614-a1.mlab.com:61614/nyc-restaurants?replicaSet=rs-ds161614`, {useNewUrlParser: true})
    .then(() => winston.info('Connected to MongoDB...'))
}
