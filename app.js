'use-strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || '3000'
const dbName = 'gwentcards'

// IMPORT ROUTES
const cardsRouter = require('./routes/api/v1/cards')

// MIDDLEWARE
app.use(bodyParser.json())
app.use(express.json())

// ROUTES MIDDLEWARE
app.use('/api/v1/cards', cardsRouter)

// CREATE SERVER
const server = app.listen(port, () => {
  mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log(`Server listening on port ${port}!`)
    }
  )
})
