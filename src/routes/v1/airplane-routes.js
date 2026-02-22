const express = require('express');

const { AirplaneController } = require('../../controllers');
const router = express.Router();

console.log("Airplane routes loaded");

//   /api/v1/airplanes POST 
router.post('/', AirplaneController.createAirplane );

module.exports = router;