const mongoose = require('mongoose')

const LocationsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['quest', 'buy', 'base deck', 'random', 'win', 'summoned'],
    },
    territory: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    character: {
      type: String,
      required: false,
    },
  },
  { _id: false }
)

const CardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
    enum: [
      'neutral',
      'monsters',
      'nilfgaard',
      'northern realms',
      "scoia'tael",
      'skellige',
    ],
  },
  row: {
    type: String,
    required: false,
    enum: ['close', 'ranged', 'siege', 'leader', 'agile'],
  },
  strength: {
    type: Number,
    required: false,
  },
  locations: {
    type: [LocationsSchema],
    required: true,
  },
  abilities: {
    type: [String],
    required: false,
    default: undefined,
    enum: [
      'agile',
      'hero',
      'medic',
      'morale boost',
      'muster',
      'spy',
      'tight bond',
    ],
  },
  effect: {
    type: String,
    required: false,
    enum: [
      'weather',
      'decoy',
      "commander's horn",
      'scorch',
      'summon avenger',
      'mardroeme',
      'berserker',
    ],
  },
  notes: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Cards', CardsSchema)
