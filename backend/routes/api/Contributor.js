const express = require("express")
const sequelize = require("sequelize")
const {requireAuth} = require('../../utils/auth')
const {Contributor} = require('../../db/models')
const router = express.Router()


// get all contributors
router.get('/', async(req, res, next) => {
    let contributors = await Contributor.findAll({

    })
    return res.json(contributors)
})

module.exports = router