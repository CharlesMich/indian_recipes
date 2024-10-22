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
      Contributor.hasMany(
        models.Dish,
        {foreignKey: 'contributor_id'}
       )
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
    email: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contributor',
  });
  return Contributor;
};