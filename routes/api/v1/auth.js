'use strict'

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')
const bcrypt = require('bcryptjs')

const User = require('../../../models/User')
const secret = process.env.SECRET || 'super secret'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
          return res.status(500).send(err)
        }
        const payload = {
          email: user.email,
          username: user.username,
        }

        const thirtyDays = 2592000000

        const token = jwt.sign(payload, secret, { expiresIn: thirtyDays })

        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          maxAge: thirtyDays,
          sameSite: 'Strict',
          secure: process.env.NODE_ENV === 'production',
        })

        const emailPayload = {
          email: user.email,
          username: user.username,
        }

        const oneHour = 3600000
        const emailToken = jwt.sign(emailPayload, secret, {
          expiresIn: oneHour,
        })

        const link = `https://gwentcards.net/verify-account?token=${emailToken}`

        const msg = {
          to: user.email,
          from: 'support@gwentcards.net',
          subject: 'New account',
          text: 'A new account was created',
          html: `<p>Dear ${user.username},</p> <p>Click the link below to verify your email: </p> <a href=${link}>${link}</a>`,
        }
        sgMail
          .send(msg)
          .then(() => {
            return res.status(201).send({ token: token })
          })
          .catch((error) => {
            return res
              .status(500)
              .send("Couldn't send email, but did make an account")
          })
      })
    }
  )
})

// verify email
router.put('/account/verify', (req, res) => {
  const { body } = req
  const { token } = body

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
          User.findOneAndUpdate(
            { email: decoded.payload.email },
            {
              verified: true,
            },
            (err, response) => {
              if (err) {
                throw 'Error: ' + error
              }

              res.status(201).send('Email verified')
            }
          )
        }
      }
    )
  } catch (err) {
    res.status(401).send(err)
  }
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

      const thirtyDays = 2592000000

      const token = jwt.sign(payload, secret, { expiresIn: thirtyDays })

      if (!token) {
        return res.status(500).send("Error: Can't sign token")
      } else {
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          maxAge: thirtyDays,
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

// reset password - send mail
router.post('/reset', (req, res) => {
  const { body } = req
  const { username } = body

  try {
    User.find(
      {
        $or: [{ email: username }, { username: username }],
      },
      (err, response) => {
        if (err) {
          throw 'Error: ' + error
        }

        if (response.length < 1) {
          res.status(401).send('Error: user no longer exists')
        } else if (!response[0].verified) {
          res.status(400).send('Error: user has not verified email')
        } else {
          const payload = {
            email: response[0].email,
            username: response[0].username,
          }

          const oneHour = 3600000
          const token = jwt.sign(payload, secret, { expiresIn: oneHour })

          const link = `https://gwentcards.net/reset-password?token=${token}`

          const msg = {
            to: response[0].email,
            from: 'support@gwentcards.net',
            subject: 'Password reset',
            text: 'Use the link to reset your password',
            html: `<p>Dear ${response[0].username},</p> <p>Click the link below to reset your password: </p> <a href=${link}>${link}</a>`,
          }
          sgMail
            .send(msg)
            .then(() => {
              res.sendStatus(201)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    ).catch((err) => {
      console.log(err)
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

// reset password - edit password
router.put('/reset', (req, res) => {
  const { body } = req
  const { token } = body
  const { password } = body

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
          User.findOneAndUpdate(
            { email: decoded.payload.email },
            {
              password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
            },
            (err, response) => {
              if (err) {
                throw 'Error: ' + error
              }

              res.status(201).send('User password updated')
            }
          )
        }
      }
    )
  } catch (err) {
    res.status(401).send(err)
  }
})

// delete account
router.delete('/account', (req, res) => {
  const { body } = req
  const { username } = body
  const { password } = body

  User.find(
    {
      $or: [{ email: username }, { username: username }],
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

      User.findOneAndDelete({ _id: user._id }, function (err, docs) {
        if (err) {
          console.log(err)
        }

        res.sendStatus(201)
      })
    }
  )
})

module.exports = router
