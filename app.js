'use-strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || '3000'
const dbName = 'gwentcards'

// IMPORT ROUTES
const cardsRouter = require('./routes/api/v1/cards')

// MIDDLEWARE
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(express.static('.'))

// ROUTES MIDDLEWARE
app.use('/api/v1/cards', cardsRouter)

// SERVE SITE
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../GWENTcards/build', 'index.html'))
})

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
