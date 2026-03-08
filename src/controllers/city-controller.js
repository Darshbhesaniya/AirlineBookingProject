const { StatusCodes } = require('http-status-codes');
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { response } = require('express');

/*
* POST : /cities
* req-body {name: 'London'}
*/

async function createcity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        SuccessResponse.message = 'Successfully created a City';

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        console.log(error)
        ErrorResponse.message = 'something went Wrong while creating City';
        ErrorResponse.error = error;

        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        SuccessResponse.message = 'Successfully deleted a City';

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = 'something went Wrong while deleting City';
        ErrorResponse.error = error;

        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(
            req.params.id,
            req.body
        )
        SuccessResponse.data = city;
        SuccessResponse.message = "success fully updating a city";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "something went Wrong while updating a city"
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createcity,
    destroyCity,
    updateCity
}