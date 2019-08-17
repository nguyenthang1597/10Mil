export const RetailBillSchema = new Schema({
  items: [Mixed],
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
});

