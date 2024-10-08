'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Step.init({
    step_no: DataTypes.INTEGER,
    step: DataTypes.STRING,
    dish_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};