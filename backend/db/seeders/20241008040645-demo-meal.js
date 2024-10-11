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
        name: "appetizer"
    },

    {
        img: "../../Images/bread.png",
        name: "bread"
    },
    {
        img: "../../Images/idli.png",
        name: "breakfast"
    },
    {
        img: "../../Images/biryani.png",
       name: "biriyani"
    },
    {    
        img: "../../Images/curry.png",
        name: "curry"
    },
    {
        img: "../../Images/drink.png",
        name: "drink"
    },
    {
        img: "../../Images/snack.png",
       name: "snack"
    },
    {
        img: "../../Images/rice.png",
        name: "rice"
    },
    {
        img: "../../Images/soup.png",
        name: "soup"
    },
    {
        img: "../../Images/sweet.png",
        name: "sweet"
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
