'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Ingredient.belongsToMany(
      models.Dish,
      {through: 'quantity',
        foreignKey: 'Ingredient_id'}
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