'use strict'

const express = require('express')
const router = express.Router()

const Cards = require('../../../models/Cards')

router.get('/', (req, res) => {
  res.status(200).send('hello world')
})

module.exports = router
