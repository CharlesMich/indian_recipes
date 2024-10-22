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
          img: "../Images/andaman.png",
          name: "Andaman and Nicobar",
           status: "active"
      },
      {
          img: "../Images/andhra.png",
          name: "Andhra Pradesh",
           status: "active"
      },
      {
          img: "../Images/arunachal.png",
          name: "Arunachal Pradesh",
           status: "active"
      },
  
      {
          img: "../Images/assam.png",
          name: "Assam",
           status: "active"
      },
  
      {
         img: "../Images/bihar.png",
         name: "Bihar",
          status: "active"
      },
  
      {
          img: "../Images/chandigarh.png",
          name: "Chandigarh",
           status: "active"
      },
  
      {
         img: "../Images/chattisgarh.png",
         name: "Chhattisgarh",
          status: "active"
      },
  
      {
         img: "../Images/dadar.png",
         name: "Dadra & Nagar Haveli",
          status: "active"
      },
  
      {
          img: "../Images/daman.png", 
          name: "Daman and Diu",
           status: "active"
      },
  
      {
          img: "../Images/delhi.png",
          name: "Delhi",
           status: "active"
      },
      {
            img: "../Images/goa.png",
            name: "Goa",
             status: "active"
      },
      {
            img: "../Images/gujarat.png",
            name: "Gujarat",
             status: "active"
      },
      {
          img: "../Images/haryana.png",
          name: "Haryana",
           status: "active"
      },
      {
          img: "../Images/himachal.png",
          name: "Himachal Pradesh",
           status: "active"
      },
      {
          img: "../Images/jammu.png",
          name: "Jammu and Kashmir",
           status: "active"
      },{
         img: "../Images/jharkand.png",
         name: "Jharkhand",
          status: "active"
      },
      {
           img: "../Images/karnataka.png",
           name: "Karnataka",
            status: "active"
      },
      {
           img: "../Images/kerala.png",
          name: "Kerala",
           status: "active"
      },
      {
           img: "../Images/ladakh.png",
          name: "Ladakh",
           status: "active"
      },
      {
        img: "../Images/lakshwadeep.png",
          name: "Lakshadweep",
           status: "active"
      },
      {
          img: "../Images/madhyapradesh.png",
          name: "Madhya Pradesh",
           status: "active"
      },
      {
          img: "../Images/maharashtra.png",
          name: "Maharashtra",
           status: "active"
      },
      {
           img: "../Images/manipur.png",
          name: "Manipur",
           status: "active"
      },
      {
           img: "../Images/meghalaya.png",
          name: "Meghalaya",
           status: "active"
      },
      {
           img: "../Images/mizoram.png",
          name: "Mizoram",
           status: "active"
      },
      {
          img: "../Images/nagaland.png",
           name: "Nagaland",
            status: "active"
      },
      {
          img: "../Images/orissa.png",
          name: "Odisha",
           status: "active"
      },
      {
          img: "../Images/pondichery.png",
          name: "Puducherry",
           status: "active"
      },
      {
          img: "../Images/punjab.png",
         name: "Punjab",
          status: "active"
      },
      {
           img: "../Images/rajasthan.png",
          name: "Rajasthan",
           status: "active"
      },
      {
          img: "../Images/sikkim.png",
          name: "Sikkim",
           status: "active"
      },
      {
           img: "../Images/tamilnadu.png",
        name: "Tamilnadu",
         status: "active"
      },
      {
           img: "../Images/telangana.png",
          name: "Telangana",
           status: "active"
      },
      {
          img: "../Images/tripura.png",
          name: "Tripura",
           status: "active"
      },
      {
           img: "../Images/uttarpradesh.png",
          name: "Uttar Pradesh",
           status: "active"
      },
      {
          img: "../Images/uttarakand.png",
         name: "Uttarakhand",
          status: "active"
      },
      {
          img: "../Images/bengal.png",
          name: "West Bengal",
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
