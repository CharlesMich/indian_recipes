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

    data = data.filter(item => item.state === state)

    if (!data) {
        return <div>Loading...</div>
    }
  return (
    <div>Dishes</div>
  )
}
