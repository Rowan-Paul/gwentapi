const mongoose = require('mongoose')
require('../models/Cards')

const dbName = 'gwentcards'

const db = mongoose.connection

const Cards = mongoose.model('Cards')

const northernRealms = require('./northernRealms.json')
const monsters = require('./monsters.json')
const nilfgaard = require('./nilfgaard.json')
const scoiatael = require('./scoiatael.json')

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

  // await Cards.insertMany(northernRealms)
  // await Cards.insertMany(monsters)
  // await Cards.insertMany(nilfgaard)
  // await Cards.insertMany(scoiatael)
  await Cards.insertMany([
    // Biting Frost
    {
      name: 'Biting Frost',
      deck: 'Neutral',
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      effect: 'Weather',
      notes:
        'Sets the strength of all Close Combat cards to 1 for both players.',
    },
    // Bovine Defense Force
    {
      name: 'Bovine Defense Force',
      deck: 'Neutral',
      row: 'Close',
      strength: 8,
      locations: [
        {
          type: 'Summoned',
        },
      ],
      notes: 'Summoned by the removal of the Cow card during play',
    },
    // Cirilla Fiona Elen Riannon
    {
      name: 'Cirilla Fiona Elen Riannon',
      deck: 'Neutral',
      row: 'Close',
      strenght: 15,
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Gwent: Big City Players',
        },
      ],
      abilities: ['Hero'],
    },
    // Clear Weather
    {
      name: 'Clear Weather',
      deck: 'Neutral',
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      effect: 'Weather',
      notes:
        'Removes all Weather Card (Biting Frost, Impenetrable Fog and Torrential Rain) effects.',
    },
    // Commander's Horn
    {
      name: "Commander's Horn",
      deck: 'Neutral',
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Crossroads Inn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Merchant',
        },
        {
          type: 'Buy',
          territory: 'Novigrad or Velen',
          location: 'Passiflora or Circus camp near Carstenm',
          character: 'Innkeeper or trader',
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'The Alchemy Inn, Oxenfurt',
          character: 'Stjepan',
        },
      ],
      effect: "Commander's Horn",
      notes:
        'Doubles the strength of all unit cards in that row. Limited to 1 per row.',
    },
    // Cow
    {
      name: 'Cow',
      deck: 'Neutral',
      row: 'Ranged',
      strenght: 0,
      locations: [
        {
          type: 'Win',
          territory: 'Velen',
          location: 'A barn, Brunwich',
        },
      ],
      effect: 'Summon Avenger',
    },
    // Dandelion
    {
      name: 'Dandelion',
      deck: 'Neutral',
      row: 'Close',
      strenght: 2,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Vegelbud Estate',
          character: 'quest A Matter of Life and Death',
        },
      ],
      effect: "Commander's Horn",
    },
    // Decoy
    {
      name: 'Decoy',
      deck: 'Neutral',
      locations: [
        {
          type: 'Buy',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Innkeeperess or Trader outside',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: "Crow's Perch",
          character: "Quartermasters Baron's Store",
        },
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Seven Cats Inn',
          character: 'Innkeeper',
        },
      ],
      effect: 'Decoy',
    },
    // Emiel Regis Rohellec Terzleff
    {
      name: 'Emiel Regis Rohellec Terzieff',
      deck: 'Neutral',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Innkeeperess or Trader outside',
        },
      ],
    },
    // Gaunter O'Dimm
    {
      name: "Gaunter O'Dimm",
      deck: 'Neutral',
      row: 'Siege',
      strength: 2,
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: 'Auction House',
          character: 'Hilbert (quest Open Sesame!)',
        },
      ],
      abilities: ['Muster'],
    },
    // Gaunter O'DimmL Darkness
    {
      name: "Gaunter O'Dimm: Darkness",
      deck: 'Neutral',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Upper Mill',
          character: "Dula kh'Amanni",
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Circus camp near Carsten',
          character: 'Trader',
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
    // Geralt of Rivia
    {
      name: 'Geralt of Rivia',
      deck: 'Neutral',
      row: 'Close',
      strength: 15,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Seven Cats Inn',
          character: 'Thaler (quest: Gwent: Playing Thaler)',
        },
      ],
      abilities: ['Hero'],
    },
    // Impenetrable Fog
    {
      name: 'Impenetrable Fog',
      deck: 'Neutral',
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      effect: 'Weather',
      notes:
        'Sets the strength of all Ranged Combat cards to 1 for both players.',
    },
    // Mysterious Elf
    {
      name: 'Mysterious Elf (Avallach)',
      deck: 'Neutral',
      row: 'Close',
      strength: 0,
      locations: [
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Gedyneith, Ard Skellig',
          character: 'Gremist (quest Gwent: Skellige Style)',
        },
      ],
      abilities: ['Hero', 'Spy'],
      notes: 'After completing Practicum In Advanced Alchemy',
    },
    // Olgierd von Everec
    {
      name: 'Olgierd von Everec',
      deck: 'Neutral',
      row: 'Agile',
      strength: 6,
      locations: [
        {
          type: 'Win',
          territory: 'Novigrad',
          location: "Shani's house",
          character: "Shani or Shani's house if she's left",
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Scorch
    {
      name: 'Scorch',
      deck: 'Neutral',
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Cunny of the Goose',
          character: 'Innkeep',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'The New Port, Kaer Trolde Harbor, Spikeroog',
          character: 'Jonas the Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Urialla Harbor, An Skellig',
          character: 'Innkeeper',
        },
      ],
      effect: 'Scorch',
    },
    // Skellige Storm
    {
      name: 'Skellige Storm',
      deck: 'Neutral',
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Tourney Grounds',
          character: 'Barber',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Tourney Grounds',
          character: 'Armorer',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'San Sebastian (East side of Beauclair)',
          character: 'Butcher',
        },
      ],
      effect: 'Weather',
      notes: 'Reduces the Strength of all Range and Siege Units to 1.',
    },
    // Torrential Rain
    {
      name: 'Torrential Rain',
      deck: 'Neutral',
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      effect: 'Weather',
      notes:
        'Sets the strength of all Siege Combat cards to 1 for both players.',
    },
    // Triss Merigold
    {
      name: 'Triss Merigold',
      deck: 'Neutral',
      row: 'Close',
      strength: 7,
      locations: [
        {
          type: 'Quest',
          character: 'Lambert (quest: Gwent: Old Pals)',
        },
      ],
      ability: 'Hero',
    },
    // Vesemir
    {
      name: 'Vesemir',
      deck: 'Neutral',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Hierach Square',
          character: 'Vimme Vivaldi (quest: Gwent: Big City Players)',
        },
      ],
    },
    // Villentretenmerth
    {
      name: 'Villentretenmerth',
      deck: 'Neutral',
      row: 'Close',
      strength: 7,
      locations: [
        {
          type: 'Random',
        },
      ],
      effect: 'Scorch',
    },
    // Yennefer of Vengerberg
    {
      name: 'Yennefer of Vengerberg',
      deck: 'Neutral',
      row: 'Ranged',
      strength: 7,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'The Alchemy Inn, Oxenfurt',
          character: 'Stjepan (quest: Gwent: Playing Innkeeps)',
        },
      ],
      abilities: ['Hero', 'Medic'],
    },
    // Zoltan Chivay
    {
      name: 'Zoltan Chivay',
      deck: 'Neutral',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Quest',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: "Scholar or under the Hanged Man's Tree",
        },
      ],
    },
  ])
}
