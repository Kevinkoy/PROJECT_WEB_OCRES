const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spendingSchema = new Schema({
  category: { type: String, required: true },
  date: { type: Date, required: true },
  spending: { type: Number, required: true },
}, {
  timestamps: true,
});

const Spending = mongoose.model('Spending', spendingSchema);

module.exports = Spending;