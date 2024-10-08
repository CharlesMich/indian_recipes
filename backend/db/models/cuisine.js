'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Cuisine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cuisine.belongsTo(
        models.State,
        { foreignKey: 'state_id' }
      )
    }
  }
  Cuisine.init({
    name: {type:DataTypes.STRING(50)},
    img: DataTypes.STRING,
    state_id: { type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Cuisine',
  });
  return Cuisine;
};