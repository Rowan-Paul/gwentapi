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
    // Ballista
    {
      name: 'Ballista',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Blue Stripes Commando
    {
      name: 'Blue Stripes Commando',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy from trader',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      ability: 'Tight Bond',
    },
    // Catapult
    {
      name: 'Catapult',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 8,
      locations: [
        {
          type: 'Buy from trader',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
        {
          type: 'Buy from trader',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'Marquise Serenity',
        },
      ],
      ability: 'Tight Bond',
    },
    // Crinfrid Reavers Dragon Hunter
    {
      name: 'Crinfrid Reavers Dragon Hunter',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 5,
      locations: [
        {
          type: 'Buy from trader',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
        {
          type: 'Buy from trader',
          territory: 'Velen',
          location: 'Midcopse',
          character: 'Shopkeeper',
        },
        {
          type: 'Buy from trader',
          territory: 'Velen',
          location: 'Claywich Village',
          character: 'Trader',
        },
      ],
      ability: 'Tight Bond',
      notes: 'The merchant needs to be rescued first',
    },
  ])
}

console.log(`Finished seeding`)
