'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.addConstraint('orderDetails',{

     fields:['orderId'],

     type:'foreign key',

     references:{

       table:'orders',

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
