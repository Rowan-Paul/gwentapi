'use-strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || '3000'
const dbName = 'gwentcards'
const secret = process.env.SECRET || 'super secret'

const User = require('./models/User')

// IMPORT ROUTES
const cardsRouter = require('./routes/api/v1/cards')
const authRouter = require('./routes/api/v1/auth')
const userCardsRouter = require('./routes/api/v1/userCards')

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../GWENTcards/build')))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('.'))
app.use(cookieParser())

// ROUTES MIDDLEWARE
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/cards', cardsRouter)

function checkJWT(req, res, next) {
  const token = req.cookies.token

  try {
    const decoded = jwt.verify(token, secret, { complete: true })

    User.find(
      {
        email: decoded.payload.email,
        username: decoded.payload.username,
      },
      (err, users) => {
        if (err) {
          throw 'Error: ' + error
        }

        if (users.length < 1) {
          res.status(401).send('Error: user no longer exists')
        } else {
          const threeMonths = 2592000000

          const token = jwt.sign(
            {
              email: decoded.payload.email,
              username: decoded.payload.username,
            },
            secret,
            {
              expiresIn: threeMonths,
            }
          )

          res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: threeMonths,
            sameSite: 'Strict',
            secure: process.env.NODE_ENV === 'production',
          })
          next()
        }
      }
    )
  } catch (err) {
    res.status(401).send(err)
  }
}
app.use('/api/v1/users/cards', checkJWT, userCardsRouter)

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
