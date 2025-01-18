'use strict';

let options = {};

if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA; //define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize)=> {


    options.tableName = 'States';
    
    await queryInterface.bulkInsert(options, [
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/andaman.png",
          name: "Andaman and Nicobar",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/andhra.png",
          name: "Andhra Pradesh",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/arunachal.png",
          name: "Arunachal Pradesh",
           status: "active"
      },
  
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/assam.png",
          name: "Assam",
           status: "active"
      },
  
      {
         img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bihar.png",
         name: "Bihar",
          status: "active"
      },
  
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/chandigarh.png",
          name: "Chandigarh",
           status: "active"
      },
  
      {
         img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/chattisgarh.png",
         name: "Chhattisgarh",
          status: "active"
      },
  
      {
         img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/dadar.png",
         name: "Dadra & Nagar Haveli",
          status: "active"
      },
  
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/daman.png", 
          name: "Daman and Diu",
           status: "active"
      },
  
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/delhi.png",
          name: "Delhi",
           status: "active"
      },
      {
            img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/goa.png",
            name: "Goa",
             status: "active"
      },
      {
            img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/gujarat.png",
            name: "Gujarat",
             status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/haryana.png",
          name: "Haryana",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/himachal.png",
          name: "Himachal Pradesh",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/jammu.png",
          name: "Jammu and Kashmir",
           status: "active"
      },{
         img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/jharkand.png",
         name: "Jharkhand",
          status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/karnataka.png",
           name: "Karnataka",
            status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/kerala.png",
          name: "Kerala",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/ladakh.png",
          name: "Ladakh",
           status: "active"
      },
      {
        img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/lakshwadeep.png",
          name: "Lakshadweep",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/madhyapradesh.png",
          name: "Madhya Pradesh",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/maharashtra.png",
          name: "Maharashtra",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/manipur.png",
          name: "Manipur",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/meghalaya.png",
          name: "Meghalaya",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/mizoram.png",
          name: "Mizoram",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/nagaland.png",
           name: "Nagaland",
            status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/orissa.png",
          name: "Odisha",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/pondichery.png",
          name: "Puducherry",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/punjab.jpg",
         name: "Punjab",
          status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/rajasthan.png",
          name: "Rajasthan",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/sikkim.png",
          name: "Sikkim",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/tamilnadu.png",
        name: "Tamilnadu",
         status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/telangana.png",
          name: "Telangana",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/tripura.png",
          name: "Tripura",
           status: "active"
      },
      {
           img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/uttarpradesh.png",
          name: "Uttar Pradeshh",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/uttarakand.png",
         name: "Uttarakhand",
          status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bengal.png",
          name: "West Bengal",
           status: "active"
      },
      {
          img: "https://myaaprojects.s3.us-east-2.amazonaws.com/indian_recipes/bengal.png",
          name: "North India",
           status: "active"
      },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'States';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
    null,
      {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
