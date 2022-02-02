'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Users', [{
    //   firstName: 'Vishal',
    //   lastName:'Wable',
    //   email:'vishalwable12@gmail.com',
    //   mobile:'9878675687',
    //   address:'Ahmednagar Shrirampur',
    //   postalCode:'414001',
    //   password:'VishalOne#*(134',
    //   createdAt:new Date(),
    //   updatedAt:new Date(),
    //  }], {});
    
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
