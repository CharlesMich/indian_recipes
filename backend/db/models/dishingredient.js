'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dishingredient extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  Dishingredient.init({
    quantity: DataTypes.STRING,
    unit: DataTypes.STRING,
    method: DataTypes.STRING,
    ingredient_id: DataTypes.INTEGER,
    dish_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dishingredient',
  });
  return Dishingredient;
};