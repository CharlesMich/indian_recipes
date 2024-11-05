const express = require("express")
const sequelize = require("sequelize")
const { requireAuth} = require('../../utils/auth')
const {Ingredient, Dish} = require("../../db/models")
const router = express.Router()

router.get('/', async(req, res, next) => {
    const type  = req.query.type
    console.log(type)
    let ingredients = await Ingredient.findAll({
        where: {vegnonveg:type}
    })
    return res.json(ingredients)
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
console.log(id)
    let dishes = await Ingredient.findAll({
        include:{model: Dish},
        where: { id: id}
    })
    return res.json(dishes[0].Dishes)
})

// router.get()

module.exports = router

