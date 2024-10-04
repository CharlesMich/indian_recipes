import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Dishes = () => {

  const id = useParams().id
  const location = useLocation()
  const { myState, myMeal, myIngredient } = location.state

  console.log(myState, myMeal, myIngredient)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('../Data/recipes.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data", error))
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  let dishByIngredient = Object.values(data).filter(item => item.main_ingredient.includes(myIngredient)).sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

 
  let dishByState = Object.values(data).filter(item => item.state === myState && item.meal === myMeal).sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

  let dishByMeal = Object.values(data).filter(item=> item.meal === myMeal).sort(function(a,b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })
console.log(dishByMeal)
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

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(capitalizeFirstLetter("biriyani"))
// this option is when there are no dishes for the state and meal type
  if (myMeal !== "notexisting" && myState !== "notexisting" && dishByState.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="max-container text-2xl font-semibold mt-10"><h1>{plural(myMeal)} from {myState}</h1></div>
        <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myMeal} dishes listed in ${myState}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
      </div>
     
    )
  }

  // No dishes for the meal type
  if(myMeal !== "notexisting" && myState === "notexisting" &&  dishByMeal.length === 0 ) {
    return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myMeal)} dishes</h1></div>
    <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myMeal} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  </div>
    )
  }
// no dishes for the ingredient
  if(myIngredient !=="notexisting" &&  myMeal === "notexisting" && myState === "notexisting" && dishByIngredient.length === 0 ) {
    return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myIngredient)} dishs</h1></div>
    <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myIngredient} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  </div>
    )
  }

  //  when there are dishes for the ingredient
  if(myIngredient !=="notexisting" && dishByIngredient.length !== 0 ) {
    return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myIngredient)} dishes</h1></div>
    <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByIngredient.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
      ))}

      </div>
  </div>
    )
  }

  // when there are dishes for the meal type
  if(myMeal !=="notexisting" && myState === "notexisting" &&  dishByMeal.length !== 0 ) {
    return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myMeal)} dishes</h1></div>
    <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByMeal.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
      ))}

      </div>
  </div>
    )
  }

  // this option is when there are dishes in the state and meal type

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="max-container text-2xl font-semibold mt-10"><h1>{plural(myMeal)} from {myState}</h1></div>
      <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByState.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
      ))}

      </div>
    </div>
  )
}
