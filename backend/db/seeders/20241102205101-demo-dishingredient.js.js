'use strict';

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Dishingredients';
    await queryInterface.bulkInsert(options, 
      [
       { dish_id: 1,
        ingredient_id: 1,
        quantity: 3,
        unit: "whole",
        method: "chopped",
        type:""
       },
       { dish_id: 1,
        ingredient_id: 2,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 3,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 4,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 5,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 6,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 7,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 8,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 9,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
       { dish_id: 1,
        ingredient_id: 10,
        quantity: 3,
        unit: "whole",
        method: "chopped",
         type:""
       },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Dishingredients';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, 
      null,
      {});
  }
};
