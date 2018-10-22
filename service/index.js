require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const winston = require('winston')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { Restaurant } = require('./restaurant')
const OPTS = { family: 4, useNewUrlParser: true }
const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ds161614-a0.mlab.com:61614,ds161614-a1.mlab.com:61614/nyc-restaurants?replicaSet=rs-ds161614`

const graphqlHTTP = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    allRestaurants: [Restaurant]
    searchText(text: String!, filter: String, sort: String, pageSize: Int, pageNumber: Int) : [Restaurant]
  }
  type Restaurant {
    name: String
    cuisine: String
    building: String
    street: String
    boro: String
    zipcode: String
    phone: String
    searchText: String
    imageUrl: String
    grade: String
  }
`)

const escapeRegExp = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")

const root = {
  allRestaurants: async function(){
    const restaurants = await Restaurant.find({}).limit(10)
    return restaurants
  },
  searchText: async function({ text, filter = "All", sort = "name", pageSize = 100, pageNumber = 2 }){
    const filterGrade = {
      A: { grade: "A" },
      B: { grade: "B" },
      C: { grade: "C" }
      // Z: { grade: "Z" },
      // other: { grade: {$in:["Not Yet Graded", null]}},
      // All: { grade: {$in: ["A", "B", "C", "Z","Not Yet Graded", null]}}
    }
    const string = new RegExp('\.\*'+text+'\.\*', 'i')
    const restaurants = await Restaurant.find({ searchText: string})
    .where(filterGrade[filter])
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
    .sort(sort)
    return restaurants
  }
}

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))


// app.get('/restaurants', async(req,res) => {
//   const restaurant = await Restaurant.find({cuisine: "Korean"})
//   res.send(restaurant)
// })

mongoose.connect(uri, OPTS)
  .then(() => winston.info('Connected to MongoDB...'))

const port = process.env.PORT || 3001;
app.listen(port, () => winston.info(`Listening on port ${port}...`))
