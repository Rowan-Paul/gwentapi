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
    return seedCards()
  })
  .then(() => {
    console.log(`Finished seeding`)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    db.close()
  })

async function seedCards() {
  await Cards.deleteMany()

  await Cards.insertMany(northernRealms)
  await Cards.insertMany(monsters)
  await Cards.insertMany(nilfgaard)
  await Cards.insertMany(scoiatael)
  await Cards.insertMany(neutral)
  await Cards.insertMany(skellige)
}
