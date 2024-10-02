import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



export const MealTypeByState = () => {

    const id = useParams().id
    const location = useLocation()
    const { abc} = location.state 
   
    const [data, setData] = useState(null);

     useEffect(()=> {
      fetch('/Data/meal.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data", error))
    }, [])
    
    if (!data) {
      return <div>Loading...123</div>
    }
      return (
       <div className="flex flex-col min-h-screen  bg-gray-100">
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
        <div className="max-container text-2xl font-semibold mt-10"><h1>Explore the culinary world of {abc}</h1></div>
       <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{data.meal.map((item)=> (
         <div className="flex sm:w-[300px] 
                  sm:min-w-[200px] w-full rounded-
                  [20px] shadow-3xl px-5 py-5 bg-white">
         <div className="flex flex-row items-center gap-3">
           {/* <img src={item} alt={label} width={24} height={24}/> */}
          
           <h4 className="mt-5 font-palanquin text-2xl leading-normal font-bold">{item}</h4>
           {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{item}</p> */}
           </div>
           </div>
       ) )}</div>
       {/* </section> */}
      
       </div>
      );

}
