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

    Card.find({ _id: { $in: response.cards } }, { __v: 0 }, (err, cards) => {
      if (err) {
        res.sendStatus(500)
      }

      const cardsReponse = {
        amount: cards.length,
        cards: cards,
      }

      res.status(200).send(cardsReponse)
    })
  })
})

router.post('/', (req, res) => {
  const { cards } = req.body

  const token = req.cookies.token

  const decoded = jwt.verify(token, secret, { complete: true })

  User.findOneAndUpdate(
    { username: decoded.payload.username },
    {
      $push: {
        cards: cards,
      },
    },
    { new: true },
    (error, response) => {
      if (error) {
        res.sendStatus(500)
      }

      const cardsResponse = {
        amount: response.cards.length,
        cards: response.cards,
      }

      res.status(200).send(cardsResponse)
    }
  )
})

module.exports = router
