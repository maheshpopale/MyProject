'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
       productName: 'U.S.Polo',
       productQuantity:5,
       productPrice:300,
       productDescription:'Products are available in cheaper cost',
       image:'http://localhost:4200/assets/slide1.jpg',
       createdAt:new Date(),
       updatedAt:new Date(),
       CategoryId:2
       }], {});
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
