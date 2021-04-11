const mongoose = require('mongoose')
require('../models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

const NorthernRealms = require('./northernRealms.json')

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    return seedCards()
  })
  .catch((err) => {
    console.log(err)
  })
  .then(() => {
    db.close()
  })

async function seedCards() {
  await Cards.deleteMany()

  await Cards.insertMany(NorthernRealms)
  await Cards.insertMany(monsters)
}

console.log(`Finished seeding`)
