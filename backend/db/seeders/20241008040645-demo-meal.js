'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Meals';
    await queryInterface.bulkInsert(options, [
      {
        img: "../../Images/appetizer.png",
        name: "appetizer",
         status: "active"
    },

    {
        img: "../../Images/bread.png",
        name: "bread",
         status: "active"
    },
    {
        img: "../../Images/idli.png",
        name: "breakfast",
         status: "active"
    },
    {
        img: "../../Images/biryani.png",
       name: "biriyani",
        status: "active"
    },
    {    
        img: "../../Images/curry.png",
        name: "curry",
         status: "active"
    },
    {
        img: "../../Images/drink.png",
        name: "drink",
         status: "active"
    },
    {
        img: "../../Images/snack.png",
       name: "snack",
        status: "active"
    },
    {
        img: "../../Images/rice.png",
        name: "rice",
         status: "active"
    },
    {
        img: "../../Images/soup.png",
        name: "soup",
         status: "active"
    },
    {
        img: "../../Images/sweet.png",
        name: "sweet",
         status: "active"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Meals';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
