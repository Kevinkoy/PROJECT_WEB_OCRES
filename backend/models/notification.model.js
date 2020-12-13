const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  category: { type: String, required: true },
  content: { type: String, required: true },

}, {
  timestamps: true,
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;