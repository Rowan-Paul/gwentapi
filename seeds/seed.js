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
  // await Cards.insertMany(neutral)
  await Cards.insertMany([
    // Berserker
    {
      name: 'Berserker',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      effect: 'Berserker',
    },
    // Birna Bran
    {
      name: 'Birna Bran',
      deck: 'Skellige',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      abilities: ['Medic'],
    },
    // Blueboy Lugos
    {
      name: 'Blueboy Lugos',
      deck: 'Skellige',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Cerys
    {
      name: 'Cerys',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Barrel and Bung Inn, Flovile',
          character: 'Innkeep',
        },
      ],
      abilities: ['Hero'],
    },
    // Clan Brokvar Archer
    {
      name: 'Clan Brokvar Archer',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Castel Ravello Vineyard',
          character: 'Herbalist',
        },
      ],
    },
    // Clan Dimun Pirate
    {
      name: 'Clan Dimun Pirate',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 6,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location:
            'Shop next to Grandmaster Smith shop (east of the Pheasantry)',
          character: 'Merchant',
        },
      ],
      effect: 'Scorch',
    },
    // Clan Drummond Shield Maiden
    {
      name: 'Clan Drummond Shield Maiden',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'The Cockatrice Inn',
          character: 'Innkeep',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Francollarts',
          character: 'Armorer',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Clan Heymaey Skald
    {
      name: 'Clan Heymaey Skald',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Clan Tordarroch Armorsmith
    {
      name: 'Cerys',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Clan an Craite Warrior
    {
      name: 'Clan an Craite Warrior',
      deck: 'Skellige',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Crach an Craite
    {
      name: 'Crach an Craite',
      deck: 'Skellige',
      locations: [
        {
          type: 'Base deck',
        },
      ],
      notes:
        "Shuffle all cards from each player's graveyard back into their decks.",
    },
    // Donar an Hindar
    {
      name: 'Donar an Hindar',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Draig Bon-Dhu
    {
      name: 'Draig Bon-Dhu',
      deck: 'Skellige',
      row: 'Siege',
      strength: 2,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Pheasantry',
          character: 'Innkeep',
        },
      ],
      effect: "Commander's Horn",
    },
    // Ermion
    {
      name: 'Ermion',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 8,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'The Scarlet Cardinal Inn, Francollarts',
          character: 'Innkeepress',
        },
      ],
      abilities: ['Hero'],
      effect: 'Mardroeme',
    },
    // Hjalmar
    {
      name: 'Hjalmar',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      abilities: ['Hero'],
    },
    // Holger Blackhand
    {
      name: 'Holger Blackhand',
      deck: 'Skellige',
      row: 'Siege',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Kambi
    {
      name: 'Kambi',
      deck: 'Skellige',
      row: 'Close',
      strength: 0,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Beauclair',
          character: 'Armorer',
        },
      ],
      effects: 'Summon Avenger',
      notes:
        'When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place.',
    },
    // King Bran
    {
      name: 'King Bran',
      deck: 'Skellige',
      locations: [
        {
          type: 'Quest',
          territory: 'Toussaint',
          location: 'The Pheasantry, Hauteville',
          character: 'Ducal Camerlengo (quest: Gwent: Turn, Turn, Tournament)',
        },
      ],
      notes: 'Units only lose half their Strength in bad weather conditions.',
    },
    // Light Longship
    {
      name: 'Light Longship',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Alchemy shop north of The Pheasantry',
          character: 'Perfumery merchant',
        },
      ],
      abilities: ['Muster'],
    },
    // Madman Lugos
    {
      name: 'Madman Lugos',
      deck: 'Skellige',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Mardroeme
    {
      name: 'Mardroeme',
      deck: 'Skellige',
      row: 'Close',
      strength: 0,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'East of Grandmaster Smith in Beauclair',
          character: 'Herbalist',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'The Belles of Beauclair inkeep, San Sebastian',
          character: 'Madame',
        },
      ],
      effects: 'Mardroeme',
    },
    // Olaf
    {
      name: 'Kambi',
      deck: 'Skellige',
      row: 'Agile',
      strength: 12,
      locations: [
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Adder and Jewels Winery',
          character: 'Innkeep',
        },
      ],
      abilities: ['Morale Boost'],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed',
    },
    // Svanrige
    {
      name: 'Svanrige',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Udalryk
    {
      name: 'Udalryk',
      deck: 'Skellige',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // War Longship
    {
      name: 'War Longship',
      deck: 'Skellige',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Tourney Grounds',
          character: 'Innkeep',
        },
      ],
      abilities: ['Tight Bond'],
    },
    // Young Berserker
    {
      name: 'Young Berserker',
      deck: 'Skellige',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: 'Tourney Grounds',
          character: 'Blacksmith',
        },
        {
          type: 'Win',
          territory: 'Toussaint',
          location: "Tailor's Workshop, Beauclair Market",
          character: 'Pierre',
        },
      ],
    },
  ])
}
