import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Recipe = () => {

  const id = useParams().id

  const [data, setData] = useState(null)
 console.log(id)
  useEffect(()=> {
      fetch ('../Data/recipes.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data", error))
  }, [])

  if (!data) {
    return <div>Loading...</div>
}

 const recipe = Object.values(data).filter((item)=> item.id == id)
 console.log(recipe)
 function ingList(list) {
  let newArr = []
  for (const [key, value] of Object.entries(list)) {
   newArr.push(`${key}: ${value}`)
 }
 return newArr
}


  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-gray-100">
    <div className="max-container2 flex  flex-col justify-between">{recipe.map((item)=> (
      <div className="max-container flex  flex-col justify-between  flex-wrap gap-2 my-10  bg-white p-4 rounded-md">
        <div className="font-semibold text-xl text-coral-red">{item.name}, ({item.subname})</div>
        <div className="flex flex-col sm:flex-row justify-between gap-10 bg-white py-4 rounded-md">
        <div>Serving Size: {item.servingsize}</div>
        <div>State: {item.state}</div>
        <div>Cuisine: {item.cuisine}</div>
        <div>Meal type: {item.meal}</div>
        </div>
      <div className=''><img src={item.img} alt="new" width={1000}/></div>
        <div className='flex flex-col  gap-10 my-10  items-center justify-evenly  bg-white rounded-md'>
      <div className='grid-cols-2 p-5'><div className="font-semibold text-lg">Ingredients:</div> {ingList(item.ingredient).map(((step, idx)=> (
        <div className='grid-cols-2'> {step}</div>
      )))}</div>
      </div>
      <div className='bg-white p-6 rounded-md'><div className="font-semibold text-lg">Steps:</div> {Object.values(item.steps).map(((step, idx)=> (
        <div className="flex mb-4">
        <div className="text-md">{idx+1}. {step}</div>
        </div>
      )))}</div>
      <div className='bg-white p-6 rounded-md'><div className="font-semibold text-lg">Notes:</div>  {item.notes}</div>
      <div>Source: {item.source}</div>



      </div>
    ))}
   
    </div>
    </div>
  )
}
