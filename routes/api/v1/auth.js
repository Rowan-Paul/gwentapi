'use strict'

const express = require('express')
const router = express.Router()

const User = require('../../../models/User')

// Create an account
router.post('/signup', (req, res) => {
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
      $or: [{ email: email, username: username }],
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
        return res.status(201).send('Signed up')
      })
    }
  )
})

module.exports = router
