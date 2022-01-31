'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addConstraint('Products',{
    fields:['categoryId'],
    type:'foreign key',
    references:{
      table:'Categories',
      field:'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
