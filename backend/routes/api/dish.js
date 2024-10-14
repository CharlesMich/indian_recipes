const express = require("express")
const sequelize = require("sequelize")
const { requireAuth } = require('../../utils/auth')
const { Dish } = require('../../db/models')

const router = express.Router()

// all dishes
// router.get('/', async (req, res, next) => {
//     let dishes = await Dish.findAll({
//     })
//     return res.json(dishes)
// })



// dishes by state and mealtype
router.get('/', async(req, res, next)=> {
        const stateid = req.query.stateid 
       const mealid =  req.query.mealid
       const cuisineid = req.query.cuisineid
    console.log(stateid, mealid, cuisineid)
      let dishes;
      if(cuisineid === "notexisting"){
        console.log('inside stateid && mealid')
        dishes = await Dish.findAll({
            where: { meal_id: mealid, state_id: stateid }
        })
    } else if(stateid === "notexisting" && mealid === "notexisting"){
        console.log('inside cuisineid')
        dishes = await Dish.findAll({
            where: {cuisine_id: cuisineid }
        })
      }  
       
    return res.json(dishes)
})
// dishes by cuisine
// dishes by ingredient
// dishes by mealtype

module.exports = router