'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.User);
      models.User.hasMany(orders);
    }
  }
  orders.init({
    orderDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};