'use strict'

const express = require('express')
const router = express.Router()

const Cards = require('../../../models/Cards')

router.get('/', (req, res) => {
  Cards.find({}, '-__v', (err, cards) => {
    if (err) {
      return res.status(500)
    }

    return res.status(200).send(cards)
  })
})

module.exports = router
