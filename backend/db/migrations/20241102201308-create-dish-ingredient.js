'use strict';


/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dishingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      ingredient_id: {
        type: Sequelize.STRING
      },
      dish_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dishingredients');
  }
};