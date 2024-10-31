'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Steps';
    await queryInterface.bulkInsert(options, [
      {
        step_no: 1,
        step: "Add 1 cup toor dal (yellow split peas), ½ cup red lentils, 4 cups water to a pressure cooker, instant pot, or large dutch oven. Cook until the dal is soft, broken down and completely cooked, about 20",
        dish_id: 1,
         status: "active"
    },
    {
      step_no: 1,
      step: "If using tamarind pods, add 3 tamarind pods to a small bowl and pour ½ cup hot water into it, soak for 15 minutes. Then use your hands to mash out pulp. Strain tamarind water, set aside until ready to use.",
      dish_id: 1,
       status: "active"
  },
  {
    step_no: 1,
    step: "1 Pour in cooked dal, 1 ½ cup water, and mix to combine. Bring to a boil, then turn to low and simmer until tomato is broken down, potatoes and eggplant are tender, about 25 minutes. Add tamarind water and.",
    dish_id: 1,
     status: "active"
},
{
  step_no: 1,
  step: "Add 1 cup toor dal (yellow split peas), ½ cup red lentils, 4 cups water to a pressure cooker, instant pot, or large dutch oven. Cook until the dal is soft, broken down and completely cooked, about 20 minutes in a",
  dish_id: 1,
   status: "active"
},
{
  step_no: 1,
  step: "Heat 2 Tbsp. vegetable oil in a small saucepan over medium-high. Add ¼ tsp. asafoetida or hing, 1 tsp. Kashmiri red chili powder, 5 curry leaves, 5 dried red chilis and cook until curry leaves splutter,",
  dish_id: 1,
   status: "active"
},
{
  step_no: 1,
  step: "Garnish sambar with cilantro and serve immediately.",
  dish_id: 1,
   status: "active"
},
{
  step_no: 1,
  step: "Add 1 cup toor dal (yellow split peas), ½ cup red lentils, 4 cups water to a pressure cooker, instant pot, or large dutch oven. Cook until the dal is soft, broken down and completely cooked,",
  dish_id: 1,
   status: "active"
},
{
  step_no: 1,
  step: "Add 1 cup toor dal (yellow split peas), ½ cup red lentils, 4 cups water to a pressure cooker, instant pot, or large dutch oven. Cook until the dal is soft, broken down and completely cooked, about",
  dish_id: 1,
   status: "active"
},
  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Steps';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
