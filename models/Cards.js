const mongoose = require('mongoose')

const LocationsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['Quest', 'Buy', 'Base deck', 'Random', 'Win', 'Summoned'],
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
    required: false,
    enum: ['Close', 'Ranged', 'Siege', 'Leader', 'Agile'],
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
  notes: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Cards', CardsSchema)
