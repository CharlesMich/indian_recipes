'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meal.hasMany(
        models.Dish,
        {foreignKey: 'meal_id'
          }
      )
    }
  }
  Meal.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};