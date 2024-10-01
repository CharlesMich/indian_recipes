import React from 'react'
import {useEffect, useState} from 'react'
import {Link} from 'react'

export const Cuisine = () => {
    const [data, setData] = useState(null);

    useEffect(()=> {
      fetch('../Data/cuisines.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data", error))
    }, [])
    
    if (!data) {
      return <div>Loading...</div>
    }
      return (
       <div className="flex flex-col min-h-screen justify-between bg-gray-100">
        {/* <section className="max-container flex justify-center flex-wrap gap-9 mb-10"> */}
       <div  className="max-container flex justify-center flex-wrap gap-9 my-10">{data.cuisines.map((item)=> (
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

