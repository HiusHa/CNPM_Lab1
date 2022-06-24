"use strict";

const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  version: {
    type: String,
  }
});

module.exports = mongoose.model('settings', settingSchema);