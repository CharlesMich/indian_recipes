const express = require("express")
const sequelize = require("sequelize")
const {requireAuth} = require('../../utils/auth')
const {State} = require('../../db/models')
const router = express.Router()

router.get('/', async(req, res, next) => {
    let states = await State.findAll({
    })
    return res.json(states)
})

module.exports = router