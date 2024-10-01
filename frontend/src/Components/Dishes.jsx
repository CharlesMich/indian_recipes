import React from 'react'
import { useEffect, useState } from 'react'

export const Dishes = (state) => {
    const [data, setData] = useState(null)
 
    useEffect(()=> {
        fetch ('../Data/recipes.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fetching data", error))
    }, [])

    

    if (!data) {
        return <div>Loading...</div>
    }
    let dishByState = Object.values(data).filter(item=> item.state === "TamilNadu")
   
  return (
    <div>{dishByState.map((item)=> (
      <div>{item.name}, ({item.subname})</div>
    ))}
   
    </div>
  )
}
