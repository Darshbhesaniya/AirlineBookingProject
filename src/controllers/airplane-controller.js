const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services'); 
const { SuccessResponse,ErrorResponse } = require('../utils/common');


// console.log("TYPE:", typeof AirplaneService);
// console.log("CONTENT:", AirplaneService);

async function createAirplane(req, res){
    try {
        // console.log(req.body);
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane
        SuccessResponse.message = "Successfully created an Airplane"
        console.log(SuccessResponse);
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse) 
    } catch (error) {
        //  console.log(error);  // 👈 ADD THIS
        ErrorResponse.message = "something went Wrong while creating airplane"
        ErrorResponse.error = error;
        return res 
        // .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane
}