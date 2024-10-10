const express = require("express")
const sequelize = require("sequelize")
const { requireAuth } = require('../../utils/auth')
const { Dish } = require('../../db/models')
const {Contributor} = require('../../db/models')
const { Step } = require('../../db/models')
const { Ingredient } = require('../../db/models')
const router = express.Router()

//recipe by id
router.get('/:id', async (req, res, next) => {
    let myDish = await Dish.findAll({
    })
    return res.json(myDish)
})

module.exports = router
