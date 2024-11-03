'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    
    static associate(models) {
     Ingredient.belongsToMany(
      models.Dish,
      {through: 'quantity',
        foreignKey: 'Ingredient_id',
        otherKey: 'dish_id'}
     )
    }
  }
  Ingredient.init({
    name: DataTypes.STRING,
    vegnonveg: DataTypes.STRING,
    img: DataTypes.STRING,
    highlightingredient: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};