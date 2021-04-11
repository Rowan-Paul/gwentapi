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
          type: 'Buy',
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
          type: 'Buy',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
        {
          type: 'Buy',
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
          type: 'Buy',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Midcopse',
          character: 'Shopkeeper',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Claywich Village',
          character: 'Trader',
        },
      ],
      ability: 'Tight Bond',
      notes: 'The merchant needs to be rescued first',
    },
    // Dethmold
    {
      name: 'Dethmold',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 8,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Dun Banner Medic
    {
      name: 'Dun Banner Medic',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      ability: 'Medic',
    },
    // Esterad Thyssen
    {
      name: 'Esterad Thyssen',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Bathhouse',
          character: 'Dijkstra',
        },
      ],
      ability: 'Hero',
    },
    // Foltest: King of Temeria
    {
      name: 'Foltest: King of Temeria',
      deck: 'Northern Realms',
      row: 'Leader',
      locations: [
        {
          type: 'Base deck',
        },
      ],
      notes:
        'Pick an Impenetrable Fog card from your deck and play it instantly.	',
    },
    // Foltest: Lord Commander of the North
    {
      name: 'Foltest: Lord Commander of the North',
      deck: 'Northern Realms',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'White Orchard',
          location: 'White Orchard Tavern',
          character: 'Elsa (innkeeperess) or Bram (trader)',
        },
      ],
      notes:
        'Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play.',
    },
    // Foltest: Son of Medell
    {
      name: 'Foltest: Son of Medell',
      deck: 'Northern Realms',
      row: 'Leader',
      locations: [
        {
          type: 'Buy',
          territory: 'Novigrad',
          location: 'Circus camp near Carsten',
          character: 'Merchant',
        },
      ],
      notes:
        "Destroy your enemy's strongest Ranged Combat unit(s) if the combined strength of all his or her Ranged Combat units is 10 or more.",
    },
    // Foltest: The Siegemaster
    {
      name: 'Foltest: The Siegemaster',
      deck: 'Northern Realms',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          territory: 'Palace of Vizima',
          location: 'Palace gardens',
          character: 'Nilfgardian nobleman',
        },
      ],
      notes:
        "Doubles the strength of all your Siege units (unless a Commander's Horn is also present on that row).",
    },
    // Foltest: The Steel-Forged
    {
      name: 'Foltest: The Steel-Forged',
      deck: 'Northern Realms',
      row: 'Leader',
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Passiflora',
          character: 'High Stakes quest',
        },
      ],
      notes:
        "Destroy your enemy's strongest Siege unit(s) if the combined strength of all his or her Siege units is 10 or more.",
    },
    // John Natalis
    {
      name: 'John Natalis',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Novigrad',
          location: 'Golden Sturgeon Tavern',
          character: 'Ravvy',
        },
      ],
      ability: 'Hero',
    },
    // Kaedweni Siege Expert
    {
      name: 'Kaedweni Siege Expert',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 1,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
      ability: 'Morale Boost',
    },
    // Keira Metz
    {
      name: 'Keira Metz',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Philippa Eilhart
    {
      name: 'Philippa Eilhart',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 10,
      locations: [
        {
          type: 'Random',
        },
      ],
      ability: 'Hero',
    },
    // Poor Fucking Infantry
    {
      name: 'Poor Fucking Infantry',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 1,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
        {
          type: 'Buy',
          territory: 'Velen',
          location: 'Lindenvale',
          character: 'Merchant',
        },
      ],
      notes: 'Might also be found at a Midcopse merchant',
    },
    // Prince Stennis
    {
      name: 'Prince Stennis',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
      ability: 'Spy',
    },
    // Redanian Foot Soldier
    {
      name: 'Redanian Foot Soldier',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 1,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
    },
    // Sabrina Glevissig
    {
      name: 'Sabrina Glevissig',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Sheldon Skaggs
    {
      name: 'Sheldon Skaggs',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 4,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Siege Tower
    {
      name: 'Siege Tower',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Random',
        },
      ],
    },
    // Siegfried of Denesle
    {
      name: 'Siegfried of Denesle',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Sigismund Dijkstra
    {
      name: 'Sigismund Dijkstra',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 4,
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: "Crow's Perch",
          character: 'Bloody Baron, Phillip Strenger',
        },
      ],
      ability: 'Spy',
    },
    // Síle de Tansarville
    {
      name: 'Síle de Tansarville',
      deck: 'Northern Realms',
      row: 'Ranged',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Thaler
    {
      name: 'Thaler',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 1,
      locations: [
        {
          type: 'Buy',
          territory: 'Skellige',
          location: 'Arinbjorn',
          character: 'Innkeeper',
        },
      ],
      ability: 'Spy',
    },
    // Trebuchet
    {
      name: 'Trebuchet',
      deck: 'Northern Realms',
      row: 'Siege',
      strength: 6,
      locations: [
        {
          type: 'Base deck',
        },
        {
          type: 'Base deck',
        },
      ],
    },
    // Vernon Roche
    {
      name: 'Vernon Roche',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 10,
      locations: [
        {
          type: 'Quest',
          territory: 'Velen',
          location: 'Midcopse',
          character: 'Hadko the Card Prodigy',
        },
      ],
      ability: 'Hero',
    },
    // Ves
    {
      name: 'Ves',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 5,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
    // Yarpen Zigrin
    {
      name: 'Yarpen Zigrin',
      deck: 'Northern Realms',
      row: 'Close',
      strength: 2,
      locations: [
        {
          type: 'Base deck',
        },
      ],
    },
  ])
}

console.log(`Finished seeding`)
