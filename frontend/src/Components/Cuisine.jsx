import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import cuisines from '../Constants/cuisine'
import { fetchAllCuisines } from '../Store/cuisine'

export const Cuisine = () => {
  const dispatch = useDispatch()
  const cuisines = useSelector(state => Object.values(state.cuisines))

  useEffect(() => {
    dispatch(fetchAllCuisines())
    }, [dispatch])
   
    if (!cuisines) {
      return <div>Loading...</div>
    }

      return (
       <div className="flex flex-col bg-gray-100">
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
       <div  className="max-container2 flex justify-center flex-wrap gap-9 my-10">{cuisines.map((item, idx)=> (
        <Link to={`/dishes/${idx}`} state={{stateId: "notexisting", myMeal: "notexisting", myState: "notexisting", myIngredient: "notexisting", myCuisine:item.id, cuisineName:item.name }} key={idx}> <div className="flex sm:w-[300px] 
                  sm:min-w-[200px] w-full rounded-
                  [20px] shadow-3xl px-5 py-5 bg-white">
         <div className="flex flex-row items-center gap-3">
           <img src={item.img} alt={""} width={48}/>
          
           <h4 className="font-palanquin text-xl leading-normal font-semibold">{item.name}</h4>
           {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
           </div>
           </div>
             </Link>
       ) )}</div>
       {/* </section> */}
      
       </div>
      );
}

