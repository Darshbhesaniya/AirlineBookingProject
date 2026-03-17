const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

const router = express.Router();


//   /api/v1/flight POST 
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
// api/v1/flights/seats
router.patch('/:id/seats',
    FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats
)
module.exports = router;