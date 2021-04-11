const mongoose = require('mongoose')
require('../models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

const northernRealms = require('./northernRealms.json')
const monsters = require('./monsters.json')

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

  // await Cards.insertMany(northernRealms)
  // await Cards.insertMany(monsters)
  await Cards.insertMany([
    // Albrich
    {
      name: 'Albrich',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: 'Trader',
        },
      ],
    },
    // Assire var Anahid
    {
      name: 'Assire var Anahid',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Black Infantry Archer
    {
      name: 'Black Infanty Archer',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Claywich Village',
          character: 'Trader',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Merchant',
        },
      ],
      notes: 'The Claywich trader needs to be rescued first',
    },
    // Cahir Mawr Dyffryn aep Ceallach
    {
      name: 'Cahir Mawr Dyffryn aep Ceallach',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Cynthia
    {
      name: 'Cynthia',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: "Quartermasters Baron's Store",
        },
      ],
    },
    // Emhyr var Emreis: Emperor of Nilfgaard
    {
      name: 'Emhyr var Emreis: Emperor of Nilfgaard',
      deck: 'Nilfgaard',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Crossroad Inn',
          character: 'Innkeeper',
        },
      ],
      notes:
        "Emperor of Nilfgaard: Look at 3 random cards from your opponent's hand.",
    },
    // Emhyr var Emreis: His Imperial Majesty
    {
      name: 'Emhyr var Emreis: His Imperial Majesty',
      deck: 'Nilfgaard',
      row: 'Leader',
      locations: [
        {
          type: 'Base deck',
        },
      ],
      notes:
        'His Imperial Majesty: Pick a Torrential Rain card from your deck and play it instantly.',
    },
    // Emhyr var Emreis: Invader of the North
    {
      name: 'Emhyr var Emreis: Invader of the North',
      deck: 'Nilfgaard',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Near Carsten (NW) and West from Vegelbud Residence',
          character: 'Trader',
        },
      ],
      notes:
        'Invader of the North: Abilities that restore a unit to the battlefield restore a randomly-chosen unit. Affects both players.',
    },
    // Emhyr var Emreis: The Relentless
    {
      name: 'Emhyr var Emreis: The Relentless',
      deck: 'Nilfgaard',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'Sasha (quest High Stakes)',
        },
      ],
      notes: "The Relentless: Draw a card from your opponent's discard pile.",
    },
    // Emhyr var Emreis: The White Flame
    {
      name: 'Emhyr var Emreis: The White Flame',
      deck: 'Nilfgaard',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Gwent: Skellige Style',
        },
      ],
      notes: "The White Flame: Cancel your opponent's Leader abilities.",
    },
    // Etolian Auxiliary Archers
    {
      name: 'Etolian Auxiliary Archers',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 1,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Merchant',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Claywhich Village',
          character: 'Trader',
        },
      ],
      abilities: ['Medic'],
      notes: 'The merchant needs to be rescued first',
    },
    // Fringilla Vigo
    {
      name: 'Fringilla Vigo',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 6,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: "Caesar Bilzen's hous0e (quest A Dangerous Game)",
        },
      ],
    },
    // Heavy Zerrikanian Fire Scorpion
    {
      name: 'Heavy Zerrikanian Fire Scorpion',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 10,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Trader',
        },
      ],
    },
    // Impera Brigade Guard
    {
      name: 'Impera Brigade Guard',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 3,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: 'Trader',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Crossroads Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Seven Cats Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Cunny of the Goose',
          character: 'Innkeeper',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Letho of Gulet
    {
      name: 'Letho of Gulet',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Oreton',
          character: 'Boatbuilder',
        },
      ],
      abilities: ['Hero'],
    },
    // Menno Coehoorn
    {
      name: 'Menno Coehoorn',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: "Quartermasters Baron's Store",
        },
      ],
      abilities: ['Hero', 'Medic'],
    },
    // Morteisen
    {
      name: 'Morteisen',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 3,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Midcopse',
          character: 'Shopkeeper',
        },
      ],
    },
    // Movran Voorhis
    {
      name: 'Movran Voorhis',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'Marquise Serenity (quest Gwent: Big City Players)',
        },
      ],
      abilities: ['Hero'],
    },
    // Nausicaa Cavalry Rider
    {
      name: 'Nausicaa Cavalry Rider',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: "Quartermasters Baron's Store",
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Crossroad Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: 'Trader',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Putkammer
    {
      name: 'Putkammer',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 3,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Claywich Village',
          character: 'Trader',
        },
      ],
      notes: 'The Claywich trader needs to be rescued first',
    },
    // Rainfarn
    {
      name: 'Rainfarn',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Merchant',
        },
      ],
      notes: 'The Claywich trader needs to be rescued first',
    },
    // Renuald aep Matsen
    {
      name: 'Renuald aep Matsen',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Rotten Mangonel
    {
      name: 'Rotten Mangonel',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 3,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Shilard Fitz-Oesterlen
    {
      name: 'Shilard Fitz-Oesterlen',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 7,
      locations: [
        {
          type: 'Random',
        },
      ],
      abilities: ['Spy'],
    },
    // Siege Engineer
    {
      name: 'Siege Engineer',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Crossroad Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Golden Sturgeon',
          character: 'Innkeeper',
        },
      ],
    },
    // Siege Technician
    {
      name: 'Siege Technician',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 0,
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad or Velen',
          location: 'Golden Sturgeon or Circus camp',
          character: 'Innkeeper or Trader',
        },
      ],
      abilities: ['Medic'],
    },
    // Stefan Skellen
    {
      name: 'Steffan Skellen',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 9,
      locations: [
        {
          type: 'Random',
        },
      ],
      abilities: ['Spy'],
    },
    // Sweers
    {
      name: 'Sweers',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Claywich Village',
          character: 'Trader',
        },
      ],
      notes: 'The Claywich trader needs to be rescued first',
    },
    // Tibor Eggebracht
    {
      name: 'Tibor Eggebracht',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Kingfisher Inn',
          character: 'Olivier (quest Gwent: Playing Innkeeps)',
        },
      ],
      abilities: ['Hero'],
    },
    // Vanhemar
    {
      name: 'Vanhemar',
      deck: 'Nilfgaard',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Vattier de Rideaux
    {
      name: 'Vattier de Rideaux',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Random',
        },
      ],
      abilities: ['Spy'],
    },
    // Vreemde
    {
      name: 'Vreemde',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Young Emissary
    {
      name: 'Young Emissary',
      deck: 'Nilfgaard',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Cunny of the Goose',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Seven Cats Inn',
          character: 'Innkeeper',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Zerrikanian Fire Scorpion
    {
      name: 'Zerrikanian Fire Scorpion',
      deck: 'Nilfgaard',
      row: 'Siege',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: 'Trader',
        },
      ],
    },
  ])
}

console.log(`Finished seeding`)
