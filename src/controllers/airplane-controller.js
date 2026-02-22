const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services'); 
console.log("TYPE:", typeof AirplaneService);
console.log("CONTENT:", AirplaneService);



async function createAirplane(req, res){
    try {
        console.log(req.body);
        
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an Airplane",
            data: airplane,
            error: {}
        }) 
    } catch (error) {
         console.log(error);  // 👈 ADD THIS
        return res 
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message: "something went Wrong while creating airplane",
            data:{},
            error: error
        });
    }
}

module.exports = {
    createAirplane
}