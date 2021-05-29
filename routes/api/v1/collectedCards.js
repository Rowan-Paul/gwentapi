'use strict'

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('../../../models/User')
const Card = require('../../../models/Card')
const secret = process.env.SECRET || 'super secret'

router.get('/', (req, res) => {
  const token = req.cookies.token

  const decoded = jwt.verify(token, secret, { complete: true })

  User.findOne({ username: decoded.payload.username }, (err, response) => {
    if (err) {
      return res.sendStatus(500)
    }

    const formattedResponse = {
      amount: response.collected?.length,
      collected: response.collected,
    }

    res.status(200).send(formattedResponse)
  })
})

router.post('/', (req, res) => {
  const { collected } = req.body

  const token = req.cookies.token

  const decoded = jwt.verify(token, secret, { complete: true })

  User.findOneAndUpdate(
    { username: decoded.payload.username },
    {
      collected: collected,
    },
    { new: true },
    (error, response) => {
      if (error) {
        res.sendStatus(500)
      }

      const formattedResponse = {
        amount: response.collected?.length,
        collected: response.collected,
      }

      res.status(201).send(formattedResponse)
    }
  )
})

router.delete('/', (req, res) => {
  const { card } = req.body

  const token = req.cookies.token

  const decoded = jwt.verify(token, secret, { complete: true })

  User.updateOne(
    { username: decoded.payload.username },
    { $pullAll: { collected: [card] } },
    (error, response) => {
      if (error) {
        res.sendStatus(500)
      }

      res.sendStatus(201)
    }
  )
})

module.exports = router
