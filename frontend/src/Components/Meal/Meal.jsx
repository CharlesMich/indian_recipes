import React from 'react'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMeals } from '../../Store/meal';
import { useLocation } from 'react-router-dom'

export const Meal = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  
  const meals = useSelector(state => Object.values(state.myMeals))

  useEffect(()=> {
    dispatch(fetchAllMeals())
  }, [dispatch])
   
    if (!meals) {
      return <div>Loading...</div>
    }
      return (
       <div className="flex flex-col  bg-gray-100">
         
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
       <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{meals.map((item, idx)=> (
        <Link to={`/dishesbymeal/${idx}`} state={{mealId: item.id}} key={idx}> <div className="flex sm:w-[300px] 
                  sm:min-w-[200px] w-full rounded-
                  [20px] shadow-3xl px-5 py-5 bg-white">
         <div className="flex flex-row items-center gap-3">
           <img src={item.img} alt={""} width={48}/>
          
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
