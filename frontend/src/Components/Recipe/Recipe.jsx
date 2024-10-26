import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipe } from '../../Store/recipe'

export const Recipe = () => {

  const id = useParams().id
  const dispatch = useDispatch()

  const dish = useSelector(state =>state.myRecipe)

  console.log(dish)
  console.log(id)
  // const [data, setData] = useState(null)

  useEffect(() => {
    dispatch(fetchRecipe(id))
  }, [dispatch])

  // useEffect(() => {
  //   fetch('../Data/recipes.json')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error("Error fetching data", error))
  // }, [])

  if (!dish) {
    return <div>Loading...</div>
  }

  // const recipe = Object.values(data).filter((item) => item.id == id)

  function ingList(list) {
    let newArr = []
    for (const [key, value] of Object.entries(list)) {
      newArr.push(`${key}: ${value}`)
    }
    return newArr
  }


  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-gray-100">
      {/* <div className="max-container2 flex  flex-col justify-between">{dish.map((item) => (
        <div className="max-container flex  flex-col justify-between  flex-wrap gap-2 my-10  bg-white p-4 rounded-xl shadow-lg">
          <div className="font-semibold text-xl text-coral-red">{dish[0].name}, ({dish[0].subname})</div>
          <div className="flex flex-col sm:flex-row justify-between sm:gap-10 bg-white py-4 rounded-md">
            <div>Serving Size: {dish[0].servingsize}</div>
            <div>State: {dish[0].state}</div>
            <div>Cuisine: {dish[0].cuisine}</div>
            <div>Meal type: {dish[0].meal}</div>
          </div>
          <div className=''><img src={item.img} alt="new" width={1000} /></div>
          <div className='flex flex-col  gap-10 my-10  items-center justify-evenly  bg-white rounded-md'>
            <div className='grid-cols-2 p-5'><div className="font-semibold text-lg">Ingredients:</div> {ingList(item.ingredient).map(((step, idx) => (
              <div className='grid-cols-2'> {step}</div>
            )))}</div>
          </div>
          <div className='bg-white p-6 rounded-md'><div className="font-semibold text-lg">Steps:</div> {Object.values(item.steps).map(((step, idx) => (
            <div className="flex mb-4">
              <div className="text-md">{idx + 1}. {step}</div>
            </div>
          )))}</div>
          <div className='bg-white p-6 rounded-md'><div className="font-semibold text-lg">Notes:</div>  {item.notes}</div>
          <div>Source: {item.source}</div>



        </div>
      ))}

      </div> */}
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
  )
}
