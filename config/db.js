"use strict";
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://cnpm:nguyen951@cnpm.8olxs.mongodb.net/cnpm?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('DB connect successfully');
  } catch (error) {
    console.log("Error: " + error);
  }
}


module.exports = {
  connect
};