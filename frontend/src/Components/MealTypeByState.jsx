import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import meal from '../Constants/meal'
import { fetchAllMeals } from '../Store/meal';

export const MealTypeByState = () => {

  // we receive the state id here.
    const stateid = useParams().id
    const dispatch = useDispatch()

    console.log(stateid)
    const location = useLocation()
    const { myState } = location.state 

    const meals = useSelector(state => Object.values(state.myMeals))

    useEffect(()=> {
      dispatch(fetchAllMeals())
    }, [dispatch])

    console.log(meals)
    
    if (!meal) {
      return <div>Loading...123</div>
    }
      return (
       <div className="flex flex-col min-h-screen  bg-gray-100">
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
        <div className="max-container text-2xl font-semibold mt-10"><h1>Explore the culinary world of {myState}</h1></div>
       <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{meals.map((item, idx)=> (
         <Link to={`/dishes/${idx}`} state={{stateId: stateid, myState: myState, mealName: item.name, myMeal: item.id, myCuisine:"notexisting", myIngredient: "notexisting"}} key={idx}><div className="flex sm:w-[300px] 
                  sm:min-w-[200px] w-full rounded-
                  [20px] shadow-3xl px-5 py-5 bg-white">
         <div className="flex flex-row items-center gap-3">
           <img src={item.img} alt={""} width={48} height={48}/>
          
           <h4 className="font-palanquin text-2xl leading-normal font-bold">{item.name}</h4>
           {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
           </div>
           </div>
           </Link>
       ) )}</div>
       {/* </section> */}
      
       </div>
      );

}
