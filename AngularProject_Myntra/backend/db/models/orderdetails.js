'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderDetails.belongsTo(models.orders);
      models.orders.hasMany(orderDetails);
    }
  }
  orderDetails.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    paymentMode: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    productQuantity: DataTypes.INTEGER,
    productPrice: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'orderDetails',
  });
  return orderDetails;
};