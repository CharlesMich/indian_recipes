'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Dishes';
    await queryInterface.bulkInsert(options, [
      {
        name: "Chicken Biryani",
        subname: "Dum method",
        englishname: "chicken cooked with flavored rice",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pumpkin_sambar.JPG",
        serving_size: 4,
        cuisine_id: 1,
        state_id:32,
        contributor_id: 1,
        meal_id: 4,
        notes: "Biriyani from tamilnadu often contains coconut milk and coconut oil",
        status: "active"

    },
    {
      name: "Mutton Biryani",
      subname: "Absorption method",
      englishname: "Mutton cooked with flavored rice",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pumpkin_sambar.JPG",
      serving_size: 4,
      cuisine_id: 1,
      state_id:32,
      contributor_id: 1,
      meal_id: 4,
      notes: "Biriyani from tamilnadu often contains coconut milk and coconut oil",
      status: "active"

  },
  {
    name: "Channa Masala",
    subname: "also known as chole masala",
    englishname: "chickpea curry",
    img: "https://en.wikipedia.org/wiki/Chana_masala#/media/File:Chana_masala.jpg",
    serving_size: 4,
    cuisine_id: 7,
    state_id: 33,
    meal_id: 5,
     notes: "A very popular North Indian dishes accompanied with Bhatura",
      status: "active"
  }
  


  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Dishes';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
