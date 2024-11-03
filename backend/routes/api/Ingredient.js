const express = require("express")
const sequelize = require("sequelize")
const { requireAuth} = require('../../utils/auth')
const {Ingredient} = require("../../db/models")
const router = express.Router()

router.get('/', async(req, res, next) => {
    const type  = req.query.type
    console.log(type)
    let ingredients = await Ingredient.findAll({
        where: {vegnonveg:type}
    })
    return res.json(ingredients)
})

// router.get()

module.exports = router

