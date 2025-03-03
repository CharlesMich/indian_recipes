const express = require("express")
const sequelize = require("sequelize")
const { requireAuth } = require('../../utils/auth')
const { handleValidationErrors } = require('../../utils/validation');
const { Dish , Ingredient, Step} = require('../../db/models')
const {singleFileUpload, singleMulterUpload, multipleFilesUpload } =  require("../../awsS3");
const {check} = require('express-validator')

const router = express.Router()

const validateDishForm = [
check("name")
.notEmpty({ checkFalsey: true })
.isLength({ max: 100})
.withMessage("The name cannot be > than 100 char."),

handleValidationErrors
]

// dishes by state and mealtype
router.get('/', async(req, res, next)=> {
        const stateid = req.query.stateid 
       const mealid =  req.query.mealid
       const cuisineid = req.query.cuisineid
       const myIngredient = req.query.myIngredient
        console.log(stateid, mealid, cuisineid, myIngredient)
        console.log(typeof(+myIngredient))
       let dishes;

       if(+myIngredient !== 0) {
        console.log("..........1................", dishes)
        dishes = await Dish.findAll(
            {
            include:{model: Ingredient, where: {id: myIngredient}}
        })
       }

       if(+stateid === 0 && +cuisineid === 0 && +myIngredient === 0) {
        console.log("..........2................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid }
        })
       }

       if(+stateid === 0 && +cuisineid !== 0){
        console.log("..........3................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid, cuisine_id: cuisineid }
        })
       } else if(+cuisineid === 0 && +stateid !== 0) {
        console.log("..........4................")
        dishes = await Dish.findAll({
            where: { meal_id: mealid, state_id: stateid }
        })
       }
        return res.json(dishes)
       
})

// get a single dish
router.get('/:id', async(req, res, next) => {
const id = req.params.id
let dish = await Dish.findOne({
    // include: {model: Ingredient},
    // where:{Ingredients.id:id},
    include:[{model:Ingredient, where:{dish_id: id}},{model: Step, where:{dish_id: id}} ],
   
    // include: {model: Step, where:{dish_id: id}}
})
res.json([dish])
})

// Add a dish
router.post('/new', singleMulterUpload("img"), handleValidationErrors, async(req, res, next) => {
    const {name, subname, englishname, img, serving_size, cuisine_id, state_id, contributor_id, meal_id, notes, status} = req.body

    const url = await singleFileUpload({file: req.file, public:true})

    const newDish = Dish.create({
        name,
        subname,
        englishname, 
        img:url, 
        serving_size, 
        cuisine_id, 
        state_id, 
        contributor_id, 
        meal_id, 
        notes, 
        status
    })
    return res.json(newDish)
})


module.exports = router