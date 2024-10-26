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
    console.log('................................................', id)
    let dish = await Dish.findByPk(id, {
        include:[{model:Ingredient, where:{dish_id: id}},{model: Step, where:{dish_id: id}}, {model: Contributor }],
         include: { all: true } 
    })
   
    res.json(dish)
    })

module.exports = router
