'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Contributors';
    await queryInterface.bulkInsert(options, [
      {
        name: "Chef Charles Michael",
        title: "Executive Chef",
        company: "Taj Coromandel",
        img: "https://myaaprojects.s3.us-east-2.amazonaws.com/profile-circle.png",
        website: "www.giftebbookstore.com",
        social: "www.facebook.com",
        youtube:"www.youtube.com",
        email: "charleedongo@hotmail.com",
        status: "active"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Contributors';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
