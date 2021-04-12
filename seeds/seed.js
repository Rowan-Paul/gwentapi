const mongoose = require('mongoose')
require('../models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

const northernRealms = require('./northernRealms.json')
const monsters = require('./monsters.json')
const nilfgaard = require('./nilfgaard.json')

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
  // await Cards.insertMany(nilfgaard)
  await Cards.insertMany([
    // Barclay Els
    {
      name: 'Barclay Els',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad or Velen',
          location: 'Golden Sturgeon or Circus camp near Carsten',
          character: 'Innkeeper or Trader',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Ciaran aep Easnillien
    {
      name: 'Ciaran aep Easnillien',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 3,
      locations: [
        {
          type: 'Random',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Dennis Cranmer
    {
      name: 'CDennis Cranmer',
      deck: "Scoia'tael",
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Dol Blathanna Archer
    {
      name: 'Dol Blathanna Archer',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad or Velen',
          location: 'Passiflora or Circus camp near Carstenm',
          character: 'Innkeeper or trader',
        },
      ],
    },
    // Dol Blathanna Scout
    {
      name: 'Dol Blathanna Scout',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Golden Sturgeon',
          character: 'Innkeeper',
        },
        {
          type: 'Random',
        },
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Trader',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Dwarven Skirmisher
    {
      name: 'Dwarven Skirmisher',
      deck: "Scoia'tael",
      row: 'Close',
      strength: 3,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'The Alchemy Inn, Oxenfurt',
          character: 'Stjepan',
        },
      ],
    },
    // Eithné
    {
      name: 'Eithné',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Rosemary and Thyme',
          character: 'Zoltan (quest Gwent: Old Pals)',
        },
      ],
      abilities: ['Hero'],
    },
    // Elven Skirmisher
    {
      name: 'Elven Skirmisher',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Urialla Village, An Skellig',
          character: 'Innkeeper',
        },
      ],
      abilities: ['Muster'],
    },
    // Filavandrel aen Fidhail
    {
      name: 'Filavandrel aen Fidhail',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Francesca Finabair: Daisy of the Valley
    {
      name: 'Francesca Finabair: Daisy of the Valley',
      deck: "Scoia'tael",
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Cunny of the Goose',
          character: 'Innkeeper',
        },
      ],
      notes:
        'Daisy of the Valley: Draw an extra card at the beginning of the battle.',
    },
    // Francesca Findabair: Hope of the Aen Seidhe
    {
      name: 'Francesca Findabair: Hope of the Aen Seidhe',
      deck: "Scoia'tael",
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Upper Mill',
          character: "Dula kh'Amanni",
        },
      ],
      notes:
        "Hope of the Aen Seidhe: Move agile units to whichever valid row maximizes their strength (don't move units already in optimal row).",
    },
    // Francesca Findabair: Pureblood Elf
    {
      name: 'Francesca Findabair: Pureblood Elf',
      deck: "Scoia'tael",
      row: 'Leader',
      locations: [
        {
          type: 'Base deck',
        },
      ],
      notes:
        'Pureblood Elf: Pick a Biting Frost card from your deck and play it instantly.',
    },
    // Francesca Findabair: Queen of Dol Blathanna
    {
      name: 'Francesca Findabair: Queen of Dol Blathanna',
      deck: "Scoia'tael",
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'Finneas (quest High Stakes)',
        },
      ],
      notes:
        "Queen of Dol Blathanna: Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more.",
    },
    // Francesca Findabair: The Beautiful
    {
      name: 'Francesca Findabair: The Beautiful',
      deck: "Scoia'tael",
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Gwent: Big City Players',
        },
      ],
      notes:
        "The Beautiful: Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row).",
    },
    // Havekar Healer
    {
      name: 'Havekar Healer',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 0,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Cunny of the Goose',
          character: 'Innkeep',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Kingfisher Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Trader',
        },
      ],
      abilities: ['Medic'],
    },
    // Havekar Smuggler
    {
      name: 'Havekar Smuggler',
      deck: "Scoia'tael",
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Kingfisher Inn',
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
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Trader',
        },
      ],
      abilities: ['Muster'],
    },
    // Ida Emean aep Civey
    {
      name: 'Ida Emean aep Sivney',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Iorveth
    {
      name: 'Iorveth',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Shock Therapy',
        },
      ],
      abilities: ['Hero'],
    },
    // Isengrim Faolitiarna
    {
      name: 'Isengrim Faolitiarna',
      deck: "Scoia'tael",
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: "Zed's house (quest A Dangerous Game)",
        },
      ],
      abilities: ['Hero', 'Morale Boost'],
    },
    // Mahakaman Defender
    {
      name: 'Mahakaman Defender',
      deck: "Scoia'tael",
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Trader',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'Marquise Serenity',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'The Alchemy Inn, Oxenfurt',
          character: 'Stjepan',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Golden Sturgeon',
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
          location: 'Kingfisher Inn',
          character: 'Innkeeper',
        },
      ],
      abilities: ['Muster'],
    },
    // Milva
    {
      name: 'Milva',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Vegelbud Estate',
          character: 'quest A Matter of Life and Death',
        },
      ],
      abilities: ['Morale Boost'],
    },
    // Riordain
    {
      name: 'Riordain',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 1,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Saesenthessis
    {
      name: 'Saesenthessis',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Temerian Resistance Camp',
          character: 'Vernon Roche (quest Gwent: Old Pals)',
        },
      ],
      abilities: ['Hero'],
    },
    // Schirrú
    {
      name: 'Schirrú',
      deck: "Scoia'tael",
      row: 'Siege',
      strength: 8,
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Merchant',
        },
      ],
      effect: 'Scorch',
    },
    // Toruviel
    {
      name: 'Toruviel',
      deck: "Scoia'tael",
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Shock Therapy',
        },
      ],
      abilities: ['Hero'],
    },
    // Vrihedd Brigade Recruit
    {
      name: 'Vrihedd Brigade Recruit',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 10,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'The Alchemy Inn, Oxenfurt',
          character: 'Stjepan',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Kingfisher Inn',
          character: 'Innkeeper',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Yeavinn
    {
      name: 'Yeavinn',
      deck: "Scoia'tael",
      row: 'Agile',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Kaer Trolde Harbor',
          character: 'Sjusta the Tailor',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
  ])
}

console.log(`Finished seeding`)
