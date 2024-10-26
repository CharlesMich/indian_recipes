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
     Dish.hasMany(
      models.Ingredient,
      {foreignKey: "dish_id"}
     ),
     Dish.belongsTo(
      models.Contributor,
      { foreignKey: 'contributor_id' }
    ),
    Dish.belongsTo(
      models.Meal,
      {foreignKey: 'meal_id'}
    ),
    Dish.hasMany(
      models.Step,
      {foreignKey: "dish_id"}
     )
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
    contributor_id:  DataTypes.INTEGER,
    meal_id: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};