'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dishingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dishingredient.init({
    quantity: DataTypes.STRING,
    unit: DataTypes.STRING,
    method: DataTypes.STRING,
    ingredient_id: DataTypes.STRING,
    dish_id: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dishingredient',
  });
  return Dishingredient;
};