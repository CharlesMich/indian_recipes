import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { fetchAllDishes } from '../Store/dish'

export const Dishes = () => {

  const dispatch = useDispatch()

  
  const id = useParams().id
  const location = useLocation()
  const {stateId, myState , myMeal, mealName, myIngredient, myCuisine, cuisineName } = location.state

  const dishes = useSelector(state => Object.values(state.myDishes))
  
  let params = new URLSearchParams({
    'stateid': myState,
    'mealid': myMeal,
    'cuisineid':myCuisine 
  })
  
  // if(myCuisine === "notexisting"){
  // =
  //   params = new URLSearchParams({
  //     'stateid': stateId,
  //     'mealid': myMeal,
  //     'cuisineid':myCuisine
  //   })
  // } else  if(myMeal === "notexisting" && myState === "notexisting") {
  //   
  //     params = new URLSearchParams({
  //     'stateid': 'notexisting',
  //     'mealid': 'notexisting',
  //     'cuisineid': myCuisine
  //   })
  // }


  useEffect(()=> {
    dispatch(fetchAllDishes(params))
  },[dispatch, stateId, myMeal, myState, myCuisine])

  if (!dishes) {
    return <div>Loading...</div>
  }

  // let dishByCuisine = Object.values(dishes).filter(item => item.cuisine === myCuisine).sort(function (a, b) {
  //   if (a.name < b.name) { return -1; }
  //   if (a.name > b.name) { return 1; }
  //   return 0;
  // })

  // let dishByIngredient = dishes.filter(item => item.main_ingredient.includes(myIngredient)).sort(function (a, b) {
  //   if (a.name < b.name) { return -1; }
  //   if (a.name > b.name) { return 1; }
  //   return 0;
  // })

 
  // let dishByState = dishes.filter(item => item.state === myState && item.meal === myMeal).sort(function (a, b) {
  //   if (a.name < b.name) { return -1; }
  //   if (a.name > b.name) { return 1; }
  //   return 0;
  // })

  // let dishByMeal = Object.values(dishes).filter(item=> item.meal === myMeal).sort(function(a,b) {
  //   if (a.name < b.name) { return -1; }
  //   if (a.name > b.name) { return 1; }
  //   return 0;
  // })


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

  // function capitalizeFirstLetter(str) {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  // there are no dishes for the cuisine
  // if(myCuisine !== "notexisting" && myMeal === "notexisting" && myState === "notexisting" && myIngredient === "notexisting" &&  dishByCuisine.length === 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myCuisine)} dishes</h1></div>
  //   <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myCuisine} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  // </div>
  //   )
  // }

  // there are dishes for the cuisine
  // if(myCuisine !== "notexisting" && myMeal === "notexisting" && myState === "notexisting" && myIngredient === "notexisting" &&  dishByCuisine.length !== 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myCuisine)} dishes</h1></div>
  //   <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByCuisine.map((item) => (
  //       <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
  //     ))}

  //     </div>
  // </div>
  //   )
  // }

// there are no dishes for the state and meal type
  // if (myMeal !== "notexisting" && myState !== "notexisting" && dishByState.length === 0) {
  //   return (
  //     <div className="flex flex-col bg-gray-100">
  //       <div className="max-container text-2xl font-semibold mt-10"><h1>{plural(myMeal)} from {myState}</h1></div>
  //       <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myMeal} dishes listed in ${myState}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  //     </div>
     
  //   )
  // }

  // No dishes for the meal type
  // if(myMeal !== "notexisting" && myState === "notexisting" &&  dishByMeal.length === 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myMeal)} dishes</h1></div>
  //   <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myMeal} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  // </div>
  //   )
  // }
// no dishes for the ingredient
  // if(myIngredient !=="notexisting" &&  myMeal === "notexisting" && myState === "notexisting" && dishByIngredient.length === 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myIngredient)} dishs</h1></div>
  //   <div className='max-container flex  flex-col  my-10'>{`There is currently no ${myIngredient} dishes listed. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
  // </div>
  //   )
  // }

  //  when there are dishes for the ingredient
  // if(myIngredient !=="notexisting" && dishByIngredient.length !== 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myIngredient)} dishes</h1></div>
  //   <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByIngredient.map((item) => (
  //       <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
  //     ))}

  //     </div>
  // </div>
  //   )
  // }

  // when there are dishes for the meal type
  // if(myMeal !=="notexisting" && myState === "notexisting" &&  dishByMeal.length !== 0 ) {
  //   return (
  //   <div className="flex flex-col bg-gray-100">
  //   <div className="max-container text-2xl font-semibold mt-10"><h1>{capitalizeFirstLetter(myMeal)} dishes</h1></div>
  //   <div className="max-container flex  flex-col justify-start flex-wrap gap-2 my-10">{dishByMeal.map((item) => (
  //       <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
  //     ))}

  //     </div>
  // </div>
  //   )
  // }
  
  // CUISINE => DISHES
  // this option is when there are no dishes in the cuisine type
  if(stateId === "notexisting" && myMeal === "notexisting" && dishes.length === 0 ){
    return(
<>
    <div className="max-container2 text-2xl font-semibold mt-10"><h1>Dishes from {cuisineName} cuisine</h1></div>
    <div className='max-container2 flex  flex-col  my-10'>{`There is currently no  dishes listed in ${cuisineName}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
    </>
    )
    
  }
// CUISINE => DISHES
// this option is when there are dishes in the cuisine type
  if(stateId === "notexisting" && myMeal === "notexisting" && dishes.length !== 0){
    return (
      <>
        <div className="max-container2 text-2xl font-semibold mt-10"><h1>Dishes from {cuisineName} cuisine</h1></div>
        <div className="max-container2 flex  flex-col justify-start flex-wrap gap-2 my-10">{dishes.map((item) => (
          <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
        ))}
  
        </div>
      </>
    )
  }

// STATE => MEALTYPEBYSTATE => DISHES
  if(myCuisine === "notexisting" && dishes.length === 0){
    return (
      <>
      <div className="max-container2 text-2xl font-semibold mt-10"><h1>{plural(mealName)} from {myState}</h1></div>
      <div className='max-container2 flex  flex-col  my-10'>{`There is currently no ${mealName} dishes listed in ${myState}. We are regularly adding more recipes. Please check back later. If you have a recipe to share, please head to the submit recipe tab and add your recipe for review`} </div>
      </>
    )
  }

// STATE => MEALTYPEBYSTATE => DISHES 
if(myCuisine === "notexisting" && dishes.length !== 0){
  return (
    <>
      <div className="max-container2 text-2xl font-semibold mt-10"><h1>{plural(myMeal)} from {myState}</h1></div>
      <div className="max-container2 flex  flex-col justify-start flex-wrap gap-2 my-10">{dishes.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}><div>{item.name}, ({item.subname})</div></Link>
      ))}

      </div>
    </>
  )
}
}
