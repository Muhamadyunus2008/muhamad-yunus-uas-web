const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  quantity: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
