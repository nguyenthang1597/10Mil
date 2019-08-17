const { Schema, SchemaTypes, model } = require("mongoose");
const { RetailBillSchema } = require('./RetailBill');
const { RepairBillSchema } = require('./RepairBill');
const { String, Mixed, Number, Date } = SchemaTypes;


//------------------Schema------------------//


const BillSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['RETAIL', 'REPAIR'],
    required: true
  },
  details: {
    type: this.type === 'RETAIL' ? RetailBillSchema : RepairBillSchema,
    required: true
  },
  history: {
    type: [{
      version: Number,
      data: Mixed,
      updatedAt: Date
    }],
    default: []
  },
  version: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
  },
  paidAt: {
    type: Date
  },
  state: {
    type: String,
    enum: ['DRAFT', 'COMPLETED', 'DELETED'],
    default: 'DRAFT'
  },
  reason: {
    type: String,
    required: this.state === 'DELETE'
  }
})

export const Bill = model('Bill', BillSchema);