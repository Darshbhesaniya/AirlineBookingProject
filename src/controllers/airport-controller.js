const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/*
* POST : /airports
* req-body {name: 'IFI', cityId: 5, code: 'DEL'}
*/

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
           name: req.body.name,
           code:req.body.code,
           address:req.body.address,
           cityId: req.body.cityId
        });
        SuccessResponse.data = airport
        SuccessResponse.message = "Successfully created an Airplane"
      
        return res
            .status(StatusCodes.CREATED || 201)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "something went Wrong while creating airplane"
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}
/*
* GET : /airports
* req-body {}
*/
async function getAirports(req, res) {
    try {
        const airport = await AirportService.getAirports();
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "something went Wrong while Fetch a all airplane"
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
*GET : /airports/:id
* req-body { }
*/
async function getAirport(req, res) {
    try {
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "something went Wrong while fetching an airport"
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

/*
* DELETE : /airports/:id
* req-body { }
*/
async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "something went Wrong while delete an airplane"
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

// async function updateAirplane(req, res) {
//     try {
//         const airplane = await AirplaneService.updateAirplane(
//             req.params.id,
//             req.body
//         );
//         SuccessResponse.data = airplane;
//         return res
//             .status(StatusCodes.OK)
//             .json(SuccessResponse)
//     } catch (error) {
//         ErrorResponse.message = "something went Wrong while updating an airplane"
//         ErrorResponse.error = error;
//         return res
//             .status(error.statusCode)
//             .json(ErrorResponse);
//     }
// }

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
}