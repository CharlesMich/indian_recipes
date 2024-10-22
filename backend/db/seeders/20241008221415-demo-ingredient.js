'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Ingredients';
    await queryInterface.bulkInsert(options, [
      {
        dish_id: 1,
        name: "onion",
        amount: 2,
        unit: "whole",
         status: "active"
    },
    {
      dish_id: 1,
      name: "tomota",
      amount: 2,
      unit: "whole",
       status: "active"
  },
  {
    dish_id: 1,
    name: "green chillies",
    amount: 2,
    unit: "whole",
     status: "active"
},
{
  dish_id: 1,
  name: "ginger",
  amount: 2,
  unit: "whole",
   status: "active"
},
{
  dish_id: 1,
  name: "garlic",
  amount: 2,
  unit: "whole",
   status: "active"
},
{
  dish_id: 1,
  name: "chicken",
  amount: 2,
  unit: "whole",
   status: "active"
},
{
  dish_id: 1,
  name: "coriander powder",
  amount: 2,
  unit: "tbsp",
   status: "active"
},
{
  dish_id: 1,
  name: "chilli powder",
  amount: 2,
  unit: "tbsp",
   status: "active"
},
{
  dish_id: 1,
  name: "cumin powder",
  amount: 2,
  unit: "tbsp",
   status: "active"
},
{
  dish_id: 1,
  name: "turmeric power",
  amount: 2,
  unit: "tbsp",
   status: "active"
},
  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Ingredients';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
