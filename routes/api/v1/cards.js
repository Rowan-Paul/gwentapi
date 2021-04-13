'use strict'

const express = require('express')
const router = express.Router()

const Cards = require('../../../models/Cards')

router.get('/', (req, res) => {
  Cards.find({}, { __v: 0 }, (err, cards) => {
    if (err) {
      return res.status(500)
    }

    return res.status(200).send(cards)
  })
})

router.get('/:card', (req, res) => {
  const { card } = req.params

  var ObjectId = require('mongoose').Types.ObjectId
  var objId = new ObjectId(card.length < 12 ? '123456789012' : card)

  Cards.findOne(
    {
      $or: [{ _id: objId }, { name: card }],
    },
    { __v: 0 },
    (err, card) => {
      if (err) {
        return res.status(500)
      }

      return res.status(200).send(card)
    }
  )
})

module.exports = router
