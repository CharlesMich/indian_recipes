import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllDishes } from '../../Store/dish'
import { Link } from "react-router-dom"

export const DishByVeg = () => {
    const location = useLocation()
    const { myIngredient } = location.state
    const dispatch = useDispatch()
    
    const dishes = useSelector(state => Object.values(state.myDishes))

    let params = new URLSearchParams({
        'stateid': 'none',
        'cuisineid': 'none',
        'mealid': 'none',
        'myIngredient': myIngredient
      })

      useEffect(()=> {
        dispatch(fetchAllDishes(params))
      },[dispatch, myIngredient])


     // MEAL => DISHES
     if( dishes.length === 0){
        return (
          <>
          <div className="max-container2 text-2xl font-semibold mt-10"><h1>{myIngredient} Dishes</h1></div>
          <div className='max-container2 flex  flex-col  my-10'>{`There is currently no ${myIngredient} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
          </>
        )
      }

      // MEAL => DISHES 
if(dishes.length !== 0){
    return (
      <>
        <div className="max-container2 text-2xl font-semibold mt-10"><h1>{myIngredient} Dishes</h1></div>
        <div className="max-container2 flex  flex-col justify-start flex-wrap gap-2 my-10">{dishes.map((item) => (
          <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
        ))}
        </div>
      </>
    
    )
  }
}
