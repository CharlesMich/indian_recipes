import React from 'react'
import { PhotoCard } from './PhotoCard'
import { Carousel1 } from './Carousel'


export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between  bg-gray-100 max-container">

   <Carousel1/>
    <div className='max-container flex flex-row flex-wrap gap-5 justify-center mt-10'>
    <PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by States"}/>
   <PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by Cuisine"}/>
   <PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by Meal type"}/>
   <PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse Vegetarian recipes"}/>
   <PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse Non veg Recipes"}/>
    </div>
    </div>
  )
}
