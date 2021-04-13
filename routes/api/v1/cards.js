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

router.get('/decks', (req, res) => {
  const decks = {
    decks: [
      'Neutral',
      'Monsters',
      'Nilfgaard',
      'Northern Realms',
      "Scoia'tael",
      'Skellige',
    ],
  }
  return res.status(200).send(decks)
})

router.get('/decks/:deck', (req, res) => {
  const { deck } = req.params

  Cards.find({ deck: deck }, { __v: 0 }, (err, cards) => {
    if (err) {
      return res.status(500)
    }

    const deckCards = {
      deck: deck,
      amount: cards.length,
      cards: cards,
    }

    return res.status(200).send(deckCards)
  })
})

module.exports = router
