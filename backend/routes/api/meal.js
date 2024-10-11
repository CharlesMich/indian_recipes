const express = require("express")
const sequelize = require("sequelize")
const {requireAuth} = require('../../utils/auth')
const {Meal} = require('../../db/models')
const router = express.Router()

router.get('/', async(req, res, next) => {
    let mealTypes = await Meal.findAll({
    })
    return res.json(mealTypes)
})

module.exports = router