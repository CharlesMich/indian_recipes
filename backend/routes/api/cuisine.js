const express = require("express")
const sequelize = require("sequelize")
const {requireAuth} = require('../../utils/auth')
const {Cuisine} = require('../../db/models')
const router = express.Router()

router.get('/', async(req, res, next) => {
    let cuisines = await Cuisine.findAll({
    })
    return res.json(cuisines)
})

module.exports = router