const {Schema, SchemaTypes} = require('mongoose');
const {String, ObjectId, Number} = SchemaTypes;

export const RepairBillSchema = new Schema({
  customer: {
    type: {
      name: {
        type: String,
        required: true
      },
      id: {
        type: ObjectId
      }
    }
  },
  info: {
    requirement: {
      type: String
    },
    addvice: {
      type: String
    },
    carNumber: {
      type: String
    },
    kms: {
      type: Number,
      default: 0
    }
  },
  items: [],
  subTotal: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  }
}, {
  skipVersioning: true
})