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

// add contributors
router.post('/new', async(req, res, next) => {
    const {name, title, social, website, youtube, email, company, img} = req.body;

    const newContributor = await Contributor.create({
        name,
        title,
        social,
        website,
        youtube,
        email,
        company,
        img
    })
    return res.json(newContributor)
})

module.exports = router