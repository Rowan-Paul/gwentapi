const mongoose = require('mongoose')
require('./models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

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

  await Cards.insertMany([
    {
      name: 'Ballista',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 6,
      location: {
        location: 'Included at the start of the game',
      },
    },
  ])
}

console.log(`Finished seeding`)
