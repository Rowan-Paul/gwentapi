const mongoose = require('mongoose')
require('../models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

const northernRealms = require('./northernRealms.json')
const monsters = require('./monsters.json')
const nilfgaard = require('./nilfgaard.json')
const scoiatael = require('./scoiatael.json')
const neutral = require('./neutral.json')
const skellige = require('./skellige.json')

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    return Cards.deleteMany()
  })
  .then(() => {
    console.log('Deleted cards')
    return Cards.insertMany(northernRealms)
  })
  .then(() => {
    console.log('Inserted Northern Realms cards')
    return Cards.insertMany(monsters)
  })
  .then(() => {
    console.log('Inserted Monsters cards')
    return Cards.insertMany(nilfgaard)
  })
  .then(() => {
    console.log('Inserted Nilfgaard cards')
    return Cards.insertMany(scoiatael)
  })
  .then(() => {
    console.log('Inserted Scoiatael cards')
    return Cards.insertMany(neutral)
  })
  .then(() => {
    console.log('Inserted skellige cards')
    return Cards.insertMany(skellige)
  })
  .then(() => {
    console.log('Inserted skellige cards')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    db.close()
    console.log('Database closed')
  })
