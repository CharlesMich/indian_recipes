const express = require("express")
const sequelize = require("sequelize")
const { requireAuth } = require('../../utils/auth')
const { Dish , Ingredient} = require('../../db/models')

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
       const myIngredient = req.query.myIngredient

       let dishes;

        console.log(dishes, '.......................................dish')
       if(myIngredient !== "none") {
        console.log("..........1................")
        dishes = await Dish.findAll(
            {
            
            include:{model: Ingredient, where:{name: myIngredient}
            }
        })
       }

       if(stateid === "none" && cuisineid === "none" && myIngredient === "none") {
        console.log("..........2................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid }
        })
       }

       if(stateid === "none" && cuisineid !== "none"){
        console.log("..........3................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid, cuisine_id: cuisineid }
        })
       } else if(cuisineid === "none" && stateid !== "none") {
        console.log("..........4................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid, state_id: stateid }
        })
       }
        return res.json(dishes)
       
})
// dishes by cuisine
// dishes by ingredient
// dishes by mealtype

module.exports = router