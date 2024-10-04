import React from 'react'
import { Link } from "react-router-dom";
import vegetarian from '../Constants/veg';

export const Veg = () => {

if (!vegetarian){
    return <div>Loading...</div>
} 
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
    {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
   <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{vegetarian.map((item, idx)=> (
     <Link to={`/dishes/:id`}  state={{myMeal: "notexisting", myState: "notexisting", myIngredient: item.veg}} key={idx}>
      <div className="flex sm:w-[300px] 
              sm:min-w-[200px] w-full rounded-
              [20px] shadow-3xl px-5 py-3 bg-white">
     <div className="flex flex-row items-center gap-3">
       <img src={item.img} alt="" width={48} height={24}/>
      
       <h4 className=" font-palanquin text-xl leading-normal font-semibold">{item.veg}</h4>
       {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
       </div>
      
       </div>
       </Link>
   ) )}</div>
   {/* </section> */}
  
   </div>
  )
}
