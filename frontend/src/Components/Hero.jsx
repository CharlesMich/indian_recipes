import React from 'react'
import { PhotoCard } from './PhotoCard'
import { Carousel1 } from './Carousel'
import { Link } from "react-router-dom";
import { Review } from './Review';


export const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">

   
   {/* <Carousel1/> */}
   
    <div className='max-container flex flex-row flex-wrap gap-5 justify-center mt-10'>
    <Link to ={`/home/${0}`}><PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by States"}/></Link>
    <Link to ={`/home/${1}`}><PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by Cuisine"}/></Link>
    <Link to ={`/home/${2}`}><PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse by Meal type"}/></Link>
    <Link to ={`/home/${3}`}><PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse Vegetarian recipes"}/></Link>
    <Link to ={`/home/${4}`}><PhotoCard img="../../Images/state_hero_img.jpg" title={"Browse Non veg Recipes"}/></Link>
    </div>
    <Review/>
    </div>
  )
}
