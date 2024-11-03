import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllIngredients } from '../../Store/ingredient';

export const Veg = (ingtype) => {

  const dispatch = useDispatch()

  const type = ingtype.ingtype

 const ingredients = useSelector(state => Object.values(state.ingredients))

//  const type = "veg"

useEffect(() => {
  dispatch(fetchAllIngredients(type))
}, [dispatch])

console.log(ingredients)

if(!ingredients) return

  return (
    <div className="flex flex-col bg-gray-100">
    {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
   <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{ingredients.map((item, idx)=> (
     <Link to={`/dishbyveg/:id`}  state={{myIngredient: item.name}} key={idx}>
      <div className="flex sm:w-[300px] 
              sm:min-w-[200px] w-full rounded-
              [20px] shadow-3xl px-5 py-3 bg-white">
     <div className="flex flex-row items-center gap-3">
       <img src={item.img} alt="" width={48} height={24}/>
      
       <h4 className=" font-palanquin text-xl leading-normal font-semibold">{item.name}</h4>
       {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
       </div>
      
       </div>
       </Link>
   ) )}</div>
   {/* </section> */}
  
   </div>
  )
}
