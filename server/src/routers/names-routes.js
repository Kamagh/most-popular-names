const express = require("express");
const namesController = require("../controllers/names-ctrl");
const namesService = require("../services/names-sevice");
const namesDao = require("../daos/names-dao");

const router = express.Router();

const namesCtrl = namesController(namesService(namesDao()));

router.route('/')
    .get(namesCtrl.getAll);
router.route('/most-popular')
    .get(namesCtrl.getMostPopular);

module.exports = router;