"use strict";

const express = require('express');
const router = express.Router();

const Setting = require('../models/setting.js');

router.get('/', (req, res) => {
  Setting.findOne({})
    .then(setting => res.json(setting))
    .catch(err => res.json({name: "", url: "", description: "", version: ""}));
})

module.exports = router;
