'use strict'

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../../../models/User')
const secret = process.env.SECRET || 'super secret'

// Create an account
router.post('/', (req, res) => {
  const { body } = req
  const { password } = body
  const { username } = body
  let { email } = body

  if (!email) {
    return res.status(401).send('Error: Email cannot be blank.')
  }
  if (!password) {
    return res.status(401).send('Error: Password cannot be blank.')
  }
  if (!username) {
    return res.status(401).send('Error: Username cannot be blank.')
  }

  email = email.toLowerCase()
  email = email.trim()

  // Steps:
  // 1. Verify email and username don't exist
  // 2. Save
  User.find(
    {
      $or: [{ email: email }, { username: username }],
    },
    (err, previousUsers) => {
      if (err) {
        return res.sendStatus(500)
      } else if (previousUsers.length > 0) {
        return res.status(401).send('Error: Account already exist.')
      }

      // Save the new user
      const newUser = new User()
      newUser.email = email
      newUser.password = newUser.generateHash(password)
      newUser.username = username

      newUser.save((err, user) => {
        if (err) {
          return res.sendStatus(500)
        }
        const payload = {
          email: user.email,
          username: user.username,
        }

        const threeMonths = 7889400000

        const token = jwt.sign(payload, secret, { expiresIn: threeMonths })

        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          maxAge: threeMonths,
          sameSite: 'Strict',
          secure: process.env.NODE_ENV === 'production',
        })
        return res.status(201).send({ token: token })
      })
    }
  )
})

// Signin to account
router.put('/', (req, res) => {
  const { body } = req
  const { password } = body
  const { username } = body
  let { email } = body

  if (!email && !username) {
    return res.status(401).send('Error: Fill in your email or username')
  }
  if (!password) {
    return res.status(401).send('Error: Password cannot be blank.')
  }

  if (email) {
    email = email.toLowerCase()
    email = email.trim()
  }

  User.find(
    {
      $or: [{ email: email }, { username: username }],
    },
    (err, users) => {
      if (err) {
        return res.sendStatus(500)
      }

      if (users.length != 1) {
        return res.status(401).send('Error: Invalid username')
      }

      const user = users[0]

      if (!user.validPassword(password)) {
        return res.status(401).send('Error: Invalid password')
      }

      // Otherwise correct user
      const payload = {
        email: user.email,
        username: user.username,
      }

      const threeMonths = 7889400000

      const token = jwt.sign(payload, secret, { expiresIn: threeMonths })

      if (!token) {
        return res.status(500).send("Error: Can't sign token")
      } else {
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          maxAge: threeMonths,
          sameSite: 'Strict',
          secure: process.env.NODE_ENV === 'production',
        })
        return res.status(200).send({ token: token })
      }
    }
  )
})

// sign out
router.delete('/', (req, res) => {
  res.cookie('token', '', { maxAge: 0 })
  return res.sendStatus(200)
})

// verify
router.get('/', (req, res) => {
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
          return res.status(200).send({ token: token })
        }
      }
    ).catch((err) => {
      console.log(err)
    })
  } catch (err) {
    res.status(401).send(err)
  }
})

module.exports = router
