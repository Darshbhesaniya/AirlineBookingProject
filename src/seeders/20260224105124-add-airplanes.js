const { Op } = require('sequelize');

'use strict';

const { default: ModelManager } = require('sequelize/lib/model-manager');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      ModelNumber: 'airbus340',
      capacity: 900,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      ModelNumber: 'boeing777',
      capacity: 450,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {[Op.or]:[{ModelNumber: 'boeing777'} , {ModelNumber: 'airbus340'}]})
  }
};
