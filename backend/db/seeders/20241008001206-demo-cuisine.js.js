'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Cuisines';
    await queryInterface.bulkInsert(options, [
      {
        state_id: 1,
        img: "../../Images/chetinaad.png",
        name: "Chettinad"
    },
    {
        state_id: 2,
        img: "../../Images/indochinese.png",
        name: "Indo-Chinese"
    },
    {
        state_id: 3,
        img: "../../Images/malabar.png",
        name: "Malabar"
    },
    {
        state_id: 4,
        img: "../../Images/malwani.jpg",
        name: "Malwani"
    },
    {
        state_id: 5,
        img: "../../Images/tandoori.png",
        name: "Tandoori"
    },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Cuisines';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
