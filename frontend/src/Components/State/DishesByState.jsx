import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllDishes } from '../../Store/dish'
import { Link } from "react-router-dom"


export const DishesByState = () => {
  
    const location = useLocation()
    const {mealId, stateId} = location.state
    const dispatch = useDispatch()
   
    const dishes = useSelector(state => Object.values(state.myDishes))
    const meal = useSelector(state =>(state.myMeals[mealId]))
    const state = useSelector(state => (state.myStates[stateId]))

    let params = new URLSearchParams({
        'stateid': stateId,
        'mealid': mealId,
        'cuisineid': 0,
         'myIngredient': 0
      })

      useEffect(()=> {
        dispatch(fetchAllDishes(params))
      },[dispatch, mealId, stateId])

      function plural(word) {
        if (word == "appetizer") return "Appetizers"
        if (word == "curry") return "Curries"
         if (word == "bread") return "Bread varieties"
        if (word == "breakfast") return "Breakfast dishes"
        if (word == "biriyani") return "Biriyani dishes"
        if (word == "drink") return "Drinks"
        if (word == "snack") return "Snacks"
        if (word == "rice") return "Rice dishes"
        if (word == "soup") return "Soups"
        if (word == "sweet") return "Sweets and Desserts"
      }

      
  
    // STATE => MEALTYPEBYSTATE => DISHES
  if( dishes.length === 0){
    return (
      <>
      <div className="max-container2 text-2xl font-semibold mt-10"><h1>{plural(meal && meal.name)} from {state && state.name}</h1></div>
      <div className='max-container2 flex  flex-col  my-10'>{`There is currently no ${meal && meal.name} dishes listed in ${state && state.name}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
      </>
    )
  }

// STATE => MEALTYPEBYSTATE => DISHES 
if(dishes.length !== 0){
  return (
    <>
      <div className="max-container2 text-2xl font-semibold mt-10"><h1>{plural(meal.name)} from {state.name}</h1></div>
      <div className="max-container2 flex  flex-col justify-start flex-wrap gap-2 my-10">{dishes.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
      ))}

      </div>
    </>
  
  )
}
}
