'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dish.init({
    name: DataTypes.STRING,
    subname: DataTypes.STRING,
    englishname: DataTypes.STRING,
    img: DataTypes.STRING,
    serving_size: DataTypes.INTEGER,
    cuisine_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    meal: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};