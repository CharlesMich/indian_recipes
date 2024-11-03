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
        name: "onion",
        vegnonveg: "veg",
        img: "",
        highlightingredient: false,
        status: "active"
    },
    {

      name: "tomato",
      vegnonveg: "veg",
      img: "",
      highlightingredient: false,
       status: "active"
  },
  {
   
    name: "green chillies",
    vegnonveg: "veg",
    img: "",
    highlightingredient: false,
     status: "active"
},
{
 
  name: "ginger",
  vegnonveg: "veg",
  img: "",
  highlightingredient: false,
   status: "active"
},
{
  
  name: "garlic",
  vegnonveg: "veg",
  img: "",
  highlightingredient: false,
   status: "active"
},
{
 
  name: "chicken",
  vegnonveg: "nonveg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
 
  name: "beef",
  vegnonveg: "nonveg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "pork",
  vegnonveg: "nonveg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "fish",
  vegnonveg: "nonveg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/fish.png",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "okra",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "paneer",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "carrot",
  vegnonveg: "veg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bittermelon.png",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "drumstick",
  vegnonveg: "veg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/drumstick.png",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "beetroot",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "potato",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "chickpea",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "cabbage",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "cauliflower",
  vegnonveg: "veg",
  img: "",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "eggplant",
  vegnonveg: "veg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/eggplant.png",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "bittergourd",
  vegnonveg: "veg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bittermelon.png",
  highlightingredient: true,
   status: "active"
},
{
  
  name: "bellpepper",
  vegnonveg: "veg",
  img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bellpepper.png",
  highlightingredient: true,
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
