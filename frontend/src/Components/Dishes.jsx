import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Dishes = () => {

    const id = useParams().id
    const location = useLocation()
    const { myState, myMeal } = location.state 

    const [data, setData] = useState(null)
    

    useEffect(()=> {
        fetch ('../Data/recipes.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fetching data", error))
    }, [])

    

    

    if (!data) {
        return <div>Loading...</div>
    }
    let dishByState = Object.values(data).filter(item=> item.state === myState && item.meal === myMeal).sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  
  if(dishByState.length === 0){
   
    return (
      <div className="flex flex-col min-h-screen justify-between bg-gray-100">
    <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myMeal} dishes listed in ${myState}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
      </div>
  
    )
   }
   
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
    <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByState.map((item)=> (
      <Link to ={`/recipe/${item.id}`} key = {item.id}><div>{item.name}, ({item.subname})</div></Link>
    ))}
   
    </div>
    </div>
  )
}
