import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import states from '../../Constants/state'
import { Home } from '../Home';
import { fetchAllStates } from '../../Store/state';



export const State = () => {
  const dispatch = useDispatch()
  const states = useSelector(state => Object.values(state.myStates))
  
  useEffect(() => {
  dispatch(fetchAllStates())
  }, [dispatch])
  
    if (!states) {
      return <div>Loading...</div>
    }
    
      return (
       <div className="flex flex-col bg-gray-100">
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
       <div  className="max-container2 flex justify-center flex-wrap gap-9 my-10">{states.map((item, idx)=> (
         <Link to={`/state/meal/${item.id}`} state={{stateId: item.id, stateName: item.name}} key={idx}>
          <div className="flex sm:w-[300px] 
                  sm:min-w-[200px] w-full rounded-
                  [20px] shadow-3xl px-5 py-5 bg-white">
         <div className="flex flex-row items-center gap-3">
           <img src={item.img} alt="" width={48} height={24}/>
          
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
    
