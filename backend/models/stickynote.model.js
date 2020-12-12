const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stickynoteSchema = new Schema({
  title: { type: String, required: true },
  notes: { type: String, required: true },

}, {
  timestamps: true,
});

const StickyNote = mongoose.model('Stickynote', stickynoteSchema);

module.exports = StickyNote;