const express = require("express")
const sequelize = require("sequelize")
const { requireAuth } = require('../../utils/auth')
const { Dish } = require('../../db/models')
const {Contributor} = require('../../db/models')
const { Step } = require('../../db/models')
const { Ingredient } = require('../../db/models')
const router = express.Router()

//recipe by id
router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    
   
    let dish = await Dish.findByPk(+id, {
        include:[{model:Ingredient, where:{dish_id: +id}},{model: Step, where:{dish_id: +id}}, {model: Contributor }],
         include: { all: true } 
    })
   
    let efg = dish.toJSON()
    efg.Ingredients.forEach(ele => {  
      ele.quantity = ele.Dishingredient.quantity
      ele.unit = ele.Dishingredient.quantity
      ele.method = ele.Dishingredient.method
      
    })
    console.log(efg)
    res.json(efg)
    
    })

module.exports = router
