'use strict'

const express = require('express')
const router = express.Router()

const Card = require('../../../models/Card')

router.get('/', (req, res) => {
  Card.find({}, { __v: 0 }, (err, response) => {
    if (err) {
      return res.status(500)
    }

    const cards = {
      amount: response.length,
      cards: response,
    }

    return res.status(200).send(cards)
  })
})

function formatArray(input) {
  return decodeURI(input).split(',')
}

router.get('/card?*', (req, res) => {
  const { deck } = req.query
  const { row } = req.query
  const { strength } = req.query
  const { abilities } = req.query
  const { effect } = req.query
  const { dlc } = req.query

  const query = {}

  if (deck) {
    query.deck = { $in: formatArray(deck) }
  }
  if (row) {
    query.row = { $in: formatArray(row) }
  }
  if (strength) {
    query.strength = { $in: formatArray(strength) }
  }
  if (abilities) {
    query.abilities = { $in: formatArray(abilities) }
  }
  if (effect) {
    query.effect = { $in: formatArray(effect) }
  }
  if (dlc) {
    query.expansion = { $in: formatArray(dlc) }
  }

  Card.find(query, { __v: 0 }).exec(function (err, response) {
    if (err) {
      return res.status(500)
    }

    const cards = {
      amount: response.length,
      cards: response,
    }

    res.status(200).send(cards)
  })
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

  Card.find({ deck: deck }, { __v: 0 }, (err, cards) => {
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

router.get('/rows', (req, res) => {
  const rows = {
    rows: ['close', 'ranged', 'siege', 'leader', 'agile'],
  }

  return res.status(200).send(rows)
})

router.get('/rows/:row', (req, res) => {
  const { row } = req.params

  Card.find({ row: row }, { __v: 0 }, (err, cards) => {
    if (err) {
      return res.status(500)
    }

    const rowCards = {
      row: row,
      amount: cards.length,
      cards: cards,
    }

    return res.status(200).send(rowCards)
  })
})

router.get('/dlc', (req, res) => {
  Card.find({ isDLC: true }, { __v: 0 }, (err, cards) => {
    if (err) {
      return res.status(500)
    }

    return res.status(200).send(cards)
  })
})

router.get('/dlc/:dlc', (req, res) => {
  const { dlc } = req.params

  Card.find({ expansion: dlc }, { __v: 0 }, (err, cards) => {
    if (err) {
      return res.status(500)
    }

    return res.status(200).send(cards)
  })
})

// this one needs to go last
router.get('/:card', (req, res) => {
  const { card } = req.params

  var ObjectId = require('mongoose').Types.ObjectId
  var objId = new ObjectId(card.length < 12 ? '123456789012' : card)

  Card.findOne(
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
