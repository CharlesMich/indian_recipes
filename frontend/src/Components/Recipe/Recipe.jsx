import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipe } from '../../Store/recipe'

export const Recipe = () => {

  const id = useParams().id
  const dispatch = useDispatch()

  const myDish = useSelector(state =>Object.values(state.myRecipe))

  useEffect(() => {
    dispatch(fetchRecipe(id))
  }, [dispatch])

 const dish = myDish[0]
  if (!dish) {
    return <div>Loading...</div>
  }

  function ingList(list) {
    let newArr = []
    for (const [key, value] of Object.entries(list)) {
      newArr.push(`${key}: ${value}`)
    }
    return newArr
  }


  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-gray-100">
      <div className="max-container2 flex  flex-col justify-between">
      <div className="max-container flex  flex-col justify-between  flex-wrap gap-2 my-10  bg-white p-4 rounded-xl shadow-lg">
      <div className="font-semibold text-xl text-coral-red">{dish.name}, {dish.subname}</div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-10 bg-white py-4 rounded-md">
            <div>Serving Size: {dish.serving_size}</div>
            <div>State: {dish.state_id}</div>
            <div>Cuisine: {dish.cuisine_id}</div>
            <div>Meal type: {dish.meal_id}</div>
          </div>
          <div className=''><img src={dish.img} alt="new" width={1000} /></div>
          <div className='flex flex-col  gap-10 my-10  items-center justify-evenly  bg-white rounded-md'>
          <div className='grid-cols-2 p-5'><div className="font-semibold text-lg">Ingredients:</div> {dish.Ingredients && dish.Ingredients.map(((step, idx) => (
            <div className='flex gap-2'>

             
              <div className='grid-cols-2'> {step.name}</div>
              <div className='grid-cols-2'> {step.amount}</div>
              <div className='grid-cols-2'> {step.unit}</div>
            </div>
            )))}</div>
          </div>
      </div>
     
      
          <div className='bg-white p-6 rounded-xl shadow-lg mb-10'><div className="font-semibold text-lg">Steps:</div> {dish.Steps && dish.Steps.map(((step, idx) => (
            <div className="flex mb-4">
              <div className="text-md">{idx + 1}. {step.step}</div>
            </div>
          )))}</div>


          <div className='bg-white p-6 rounded-xl shadow-lg mb-10'><div className="font-semibold text-lg">Notes:</div>  {dish.notes}</div>
         
    
      <div
        className="py-8 px-8 w-xl justify-between mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-end sm:space-y-0 sm:space-x-6 mb-10">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Arun ParthaSarathy, Executive Chef and Enterpreneur
            </p>
            <p className="text-slate-500 font-medium">
              Malaikotai Indian Restaurant
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
      </div>
    </div>
  )
}
