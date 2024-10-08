'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contributor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contributor.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    img: DataTypes.STRING,
    website: DataTypes.STRING,
    social: DataTypes.STRING,
    youtube: DataTypes.STRING,
    dish_id: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contributor',
  });
  return Contributor;
};