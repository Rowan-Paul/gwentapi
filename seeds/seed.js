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

  // await Cards.insertMany(NorthernRealms)
  await Cards.insertMany([
    // Arachas
    {
      name: 'Arachas',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Arinbjorn',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Urialla Village, An Skellig',
          character: 'Innkeeper',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Svorlag, Spikeroog',
          character: 'Innkeeper',
        },
      ],
      ability: 'Muster',
    },
    // Arachas Behemoth
    {
      name: 'Arachas Behemoth',
      deck: 'Monsters',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Botchling
    {
      name: 'Botchling',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'The New Port, Kaer Trolde Harbor, Spikeroog',
          character: 'Jonas the Innkeeper',
        },
      ],
    },
    // Celaeno Harpy
    {
      name: 'Celaeno Harpy',
      deck: 'Monsters',
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
    // Cockatrice
    {
      name: 'Cockatrice',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Crone: Brewess
    {
      name: 'Crone: Brewess',
      deck: 'Monsters',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
      ability: 'Muster',
    },
    // Crone: Weavess
    {
      name: 'Crone: Weavess',
      deck: 'Monsters',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: 'Benek',
          character: 'Seer (old sage)',
        },
      ],
      ability: 'Muster',
    },
    // Crone: Whispess
    {
      name: 'Crone: Whispess',
      deck: 'Monsters',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Arinbjorn',
          character: 'Innkeeper',
        },
      ],
      ability: 'Muster',
    },
    // Draug
    {
      name: 'Draug',
      deck: 'Monsters',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Kaer Trolde, Ard Skellige',
          character: 'Crach an Craite',
        },
      ],
      ability: 'Hero',
    },
    // Earth Elemental
    {
      name: 'Earth Elemental',
      deck: 'Monsters',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'The New Port, Kaer Trolde Harbor, Spikeroog',
          character: 'Jonas the Innkeeper',
        },
      ],
    },
    // Endrega
    {
      name: 'Crone: Brewess',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Eredin Bréacc Glas: The Treacherous
    {
      name: 'Eredin Bréacc Glas: The Treacherous',
      deck: 'Monsters',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Upper Mill',
          character: " Dulla kh'Amanni",
        },
      ],
      notes: 'Doubles the strength of all spy cards (affects both players).',
    },
    // Eredin: Bringer of Death
    {
      name: 'Eredin: Bringer of Death',
      deck: 'Monsters',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: 'Novigrad',
          character: 'Count Tybalt (quest High Stakes)',
        },
      ],
      notes: 'Restore a card from your discard pile to your hand.',
    },
    // Eredin: Commander of the Red Riders
    {
      name: 'Eredin: Commander of the Red Riders',
      deck: 'Monsters',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'The New Port, Kaer Trolde Harbor, Spikeroog',
          character: 'Jonas the Innkeeper',
        },
      ],
      notes:
        "Double the strength of all your Close Combat units (unless a Commander's horn is also present on that row).",
    },
    // Eredin: Destroyer of Worlds
    {
      name: 'Eredin: Destroyer of Worlds',
      deck: 'Monsters',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          location: 'Won after completing Gwent: Velen Players',
        },
      ],
      notes: 'Discard 2 card and draw 1 card of your choice from your deck.',
    },
    // Eredin: King of the Wild Hunt
    {
      name: 'Eredin: King of the Wild Hunt',
      deck: 'Monsters',
      row: 'Leader',
      locations: [
        {
          type: 'Base deck',
        },
      ],
      notes: 'Pick any weather card from your deck and play it instantly.',
    },
    // Fiend
    {
      name: 'Fiend',
      deck: 'Monsters',
      row: 'Close',
      strength: 6,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Arinbjorn',
          character: 'Innkeeper',
        },
      ],
    },
    // Fire Elemental
    {
      name: 'Fire Elemental',
      deck: 'Monsters',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Foglet
    {
      name: 'Foglet',
      deck: 'Monsters',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Svorlag, Spikeroog',
          character: 'Innkeeper',
        },
      ],
    },
    // Forktail
    {
      name: 'Forktail',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Frightener
    {
      name: 'Frightener',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Gargoyle
    {
      name: 'Gargoyle',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Ghoul
    {
      name: 'Ghoul',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 1,
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
          location: 'Harviken Tavern, Faroe',
          character: 'Innkeeper',
        },
      ],
      ability: 'Muster',
    },
    // Grave Hag
    {
      name: 'Grave Hag',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Griffin
    {
      name: 'Griffin',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Harpy
    {
      name: 'Harpy',
      deck: 'Monsters',
      row: 'Agile',
      strength: 2,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Harviken Tavern, Faroe',
          character: 'Innkeeper',
        },
      ],
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Ice Giant
    {
      name: 'Ice Giant',
      deck: 'Monsters',
      row: 'Siege',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Svorlag, Spikeroog',
          character: 'Innkeeper',
        },
      ],
    },
    // Imlerith
    {
      name: 'Imlerith',
      deck: 'Monsters',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Random',
        },
      ],
      ability: 'Hero',
    },
    // Kayran
    {
      name: 'Kayran',
      deck: 'Monsters',
      row: 'Agile',
      strength: 8,
      locations: [
        {
          type: 'Random',
        },
      ],
      ability: 'Hero',
      notes:
        'Agile: Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed.',
    },
    // Leshen
    {
      name: 'Leshen',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Gedyneith, Ard Skellig',
          character: 'Ermion',
        },
      ],
      ability: 'Hero',
    },
    // Nekker
    {
      name: 'Nekker',
      deck: 'Monsters',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Harviken, Faroe',
          character: 'Innkeeper',
        },
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Trottheim',
          character: 'Hammonds corpse',
        },
      ],
    },
    // Plague Maiden
    {
      name: 'Plague Maiden',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Toad
    {
      name: 'Toad',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 7,
      locations: [
        {
          type: 'Win',
          territory: 'Velen',
          character: 'Olgierd von Everec',
        },
      ],
      effect: 'Scorch',
    },
    // Vampire: Bruxa
    {
      name: 'Vampire: Bruxa',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad or Toussaint',
          location: 'Vegelbud Estate or Temple Cementary',
          character:
            'quest A Matter of Life and Death or removing Louis body in Till Death Do You Part',
        },
      ],
      ability: 'Muster',
    },
    // Vampire: Ekimmara
    {
      name: 'Vampire: Ekimmara',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Svorlag, Spikeroog',
          character: 'Innkeeper',
        },
      ],
      ability: 'Muster',
    },
    // Vampire: Fleder
    {
      name: 'Vampire: Fleder',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Harviken Tavern, Faroe',
          character: 'Innkeeper',
        },
      ],
      ability: 'Muster',
    },
    // Vampire: Garkain
    {
      name: 'Vampire: Garkain',
      deck: 'Monsters',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Random',
        },
      ],
      ability: 'Muster',
    },
    // Vampire: Katakan
    {
      name: 'Vampire: Katakan',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Quest',
          territory: 'Skellige',
          location: 'Kaer Muire, Ard Skellig',
          character: 'Jarl Madman Lugos',
        },
      ],
      ability: 'Muster',
    },
    // Werewolf
    {
      name: 'Werewolf',
      deck: 'Monsters',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Urialla Village, An Skellig',
          character: 'Innkeeper',
        },
      ],
    },
    // Wyvern
    {
      name: 'Wyvern',
      deck: 'Monsters',
      row: 'Ranged',
      strength: 2,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
  ])
}

console.log(`Finished seeding`)
