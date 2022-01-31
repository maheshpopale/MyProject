'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category);
      models.Category.hasMany(Product);
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    productQuantity: DataTypes.INTEGER,
    productPrice: DataTypes.NUMERIC,
    productDescription: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};