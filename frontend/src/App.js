import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { Route, Routes } from "react-router-dom";
import {State }from './Components/State'
import {Cuisine} from './Components/Cuisine'
import {Ingredient} from './Components/Ingredient'
import {Meal} from './Components/Meal'
import {VegNonVeg} from './Components/VegNonVeg'
import { Navigation } from './Components/Navigation';
import {Home} from './Components/Home'
import { Dishes } from './Components/Dishes';
import { Recipe } from './Components/Recipe';
import { MealTypeByState } from './Components/MealTypeByState';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { SubmitRecipe } from './Components/SubmitRecipe';


function App() {
 
  
  return (
    <div className=" bg-gray-100">
      <Navigation/>
      <Routes>
      <Route path ='/state/mealtype/:id' element = {<MealTypeByState/>}></Route>
      <Route path ='/' element = {<Home/>}></Route>
      <Route path ='/dishes/:id' element = {<Dishes/>}></Route>
      <Route path ='/recipe/:id' element = {<Recipe/>}></Route>
      <Route path ='/contactus' element = {<Contact/>}></Route>
      <Route path ='/aboutus' element = {<About/>}></Route>
      <Route path ='/submitresume' element = {<SubmitRecipe/>}></Route>
      {/* <Route path ='/' element = {<Home/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
