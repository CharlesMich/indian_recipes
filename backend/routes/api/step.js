const express = require("express")
const sequelize = require("sequelize")
const {requireAuth} = require('../../utils/auth')
const {Step} = require("../../db/models")
const router = express.Router()

router.get('/', async(req, res, next) => {
    let steps = await Step.findAll({

    })
    return res.json(steps)
})

module.exports = router