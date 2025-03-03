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
      Step.belongsTo(
        models.Dish,
        {foreignKey: 'dish_id'}
       )
    }
  }
  Step.init({
    step_no: DataTypes.INTEGER,
    step: DataTypes.TEXT,
    dish_id: DataTypes.INTEGER,
    status: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};
