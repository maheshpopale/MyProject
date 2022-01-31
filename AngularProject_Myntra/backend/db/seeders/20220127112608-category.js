'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
         Name: 'Polo Tshirts',
         Description:'Available',
         createdAt:new Date(),
         updatedAt:new Date()
       },
       {
        Name: 'Formal TShirts',
        Description:'Available',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        Name: 'Soccer Tshirts',
        Description:'Available',
        createdAt:new Date(),
        updatedAt:new Date()
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
