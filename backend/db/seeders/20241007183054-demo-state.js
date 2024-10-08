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
          name: "Andaman and Nicobar"
      },
      {
          img: "../Images/andhra.png",
          name: "Andhra Pradesh"
      },
      {
          img: "../Images/arunachal.png",
          name: "Arunachal Pradesh"
      },
  
      {
          img: "../Images/assam.png",
          name: "Assam"
      },
  
      {
         img: "../Images/bihar.png",
         name: "Bihar"
      },
  
      {
          img: "../Images/chandigarh.png",
          name: "Chandigarh"
      },
  
      {
         img: "../Images/chattisgarh.png",
         name: "Chhattisgarh"
      },
  
      {
         img: "../Images/dadar.png",
         name: "Dadra & Nagar Haveli"
      },
  
      {
          img: "../Images/daman.png", 
          name: "Daman and Diu"
      },
  
      {
          img: "../Images/delhi.png",
          name: "Delhi"
      },
      {
            img: "../Images/goa.png",
            name: "Goa"
      },
      {
            img: "../Images/gujarat.png",
            name: "Gujarat"
      },
      {
          img: "../Images/haryana.png",
          name: "Haryana"
      },
      {
          img: "../Images/himachal.png",
          name: "Himachal Pradesh"
      },
      {
          img: "../Images/jammu.png",
          name: "Jammu and Kashmir"
      },{
         img: "../Images/jharkand.png",
         name: "Jharkhand"
      },
      {
           img: "../Images/karnataka.png",
           name: "Karnataka"
      },
      {
           img: "../Images/kerala.png",
          name: "Kerala"
      },
      {
           img: "../Images/ladakh.png",
          name: "Ladakh"
      },
      {
        img: "../Images/lakshwadeep.png",
          name: "Lakshadweep"
      },
      {
          img: "../Images/madhyapradesh.png",
          name: "Madhya Pradesh"
      },
      {
          img: "../Images/maharashtra.png",
          name: "Maharashtra"
      },
      {
           img: "../Images/manipur.png",
          name: "Manipur"
      },
      {
           img: "../Images/meghalaya.png",
          name: "Meghalaya"
      },
      {
           img: "../Images/mizoram.png",
          name: "Mizoram"
      },
      {
          img: "../Images/nagaland.png",
           name: "Nagaland"
      },
      {
          img: "../Images/orissa.png",
          name: "Odisha"
      },
      {
          img: "../Images/pondichery.png",
          name: "Puducherry"
      },
      {
          img: "../Images/punjab.png",
         name: "Punjab"
      },
      {
           img: "../Images/rajasthan.png",
          name: "Rajasthan"
      },
      {
          img: "../Images/sikkim.png",
          name: "Sikkim"
      },
      {
           img: "../Images/tamilnadu.png",
        name: "Tamilnadu"
      },
      {
           img: "../Images/telangana.png",
          name: "Telangana"
      },
      {
          img: "../Images/tripura.png",
          name: "Tripura"
      },
      {
           img: "../Images/uttarpradesh.png",
          name: "Uttar Pradesh"
      },
      {
          img: "../Images/uttarakand.png",
         name: "Uttarakhand"
      },
      {
          img: "../Images/bengal.png",
          name: "West Bengal"
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
