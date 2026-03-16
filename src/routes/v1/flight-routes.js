const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();


//   /api/v1/airport POST 
router.post('/', 
                FlightMiddlewares.validateCreateRequest,
                FlightController.createFlight
            );

// api/v1/flights?trips=MUM-DEL
router.get('/', 
                FlightController.getAllflights
            );

// api/v1/flights:id
router.get('/:id',
    FlightController.getFlight
);

module.exports = router;