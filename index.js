"use strict";
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const db = require('./config/db');
const port = process.env.PORT || 5000;

// Connect to DB
db.connect();

// Controllers
const settingControl = require('./controllers/setting.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compression());
app.use(cors());

app.use('/', settingControl);

app.listen(port, () => {
  console.log('Server running on port ' + port);
});