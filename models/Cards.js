const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  territory: {
    type: String,
    required: false,
  },
  character: {
    type: String,
    required: false,
  },
})

const CardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
    enum: [
      'Neutral',
      'Monsters',
      'Nilfgaard',
      'Northern Realms',
      "Scoia'tael",
      'Skellige',
    ],
  },
  row: {
    type: String,
    required: true,
    enum: ['Close', 'Ranged', 'Siege'],
  },
  strength: {
    type: Number,
    required: true,
  },
  location: {
    type: LocationSchema,
    required: true,
  },
  ability: {
    type: String,
    required: false,
    enum: [
      'Agile',
      'Hero',
      'Medic',
      'Morale Boost',
      'Muster',
      'Spy',
      'Tight Bond',
    ],
  },
  effect: {
    type: String,
    required: false,
    enum: [
      'Weather',
      'Decoy',
      "Commander's Horn",
      'Scorch',
      'Summon Avenger',
      'Mardroeme',
      'Berserker',
    ],
  },
})

module.exports = mongoose.model('Cards', CardsSchema)
