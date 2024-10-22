const express = require("express")
const sequelize = require("sequelize")
const { requireAuth} = require('../../utils/auth')
const {Ingredient} = require("../../db/models")
const router = express.Router()

router.get('/', async(req, res, next) => {
    let ingredients = await Ingredient.findAll({

    })
    return res.json(ingredients)
})

module.exports = router