import React from 'react'
import { Link } from "react-router-dom";
import nonveg from '../Constants/nonveg';


export const NonVegetarian = () => {

    if (!nonveg){
        return <div>Loading...</div>
    } 

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
    {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
   <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{nonveg.map((item, idx)=> (
     <Link to={`/state/mealtype/${idx}`} state={{myState: item.state}} key={idx}>
      <div className="flex sm:w-[300px] 
              sm:min-w-[200px] w-full rounded-
              [20px] shadow-3xl px-5 py-5 bg-white">
     <div className="flex flex-row items-center gap-3 my-2">
       <img src={item.img} alt="" width={48} height={24}/>
      
       <h4 className="font-palanquin text-xl  font-semibold">{item.nonveg}</h4>
       {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
       </div>
      
       </div>
       </Link>
   ) )}</div>
   {/* </section> */}
  
   </div>
  )
}
