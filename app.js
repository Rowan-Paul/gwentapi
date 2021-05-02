'use-strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || '3000'
const dbName = 'gwentcards'
const secret = process.env.SECRET || 'super secret'

// IMPORT ROUTES
const cardsRouter = require('./routes/api/v1/cards')
const authRouter = require('./routes/api/v1/auth')

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../GWENTcards/build')))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(express.static('.'))
app.use(cookieParser())

// ROUTES MIDDLEWARE
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/cards', cardsRouter)

app.use((req, res, next) => {
  const token = req.cookies.token

  try {
    // this only verifies the token,
    // not the user
    jwt.verify(token, secret)
    next()
  } catch (err) {
    res.status(401).send(err)
  }
})

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
