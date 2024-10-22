'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      State.hasMany(
        models.Cuisine,
        {foreignKey: 'state_id'
          }
      )
    }
  }
  State.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};