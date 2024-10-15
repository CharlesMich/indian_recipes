import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navigation } from './Components/Navigation';
import {Home} from './Components/Home'
import { Dishes } from './Components/Dishes';
import { Recipe } from './Components/Recipe';
import { Contact } from './Components/Contact';
import { About } from './Components/About';
import { SubmitRecipe } from './Components/SubmitRecipe';
import { Hero } from './Components/Hero';
import { Footer } from './Components/Footer';
import { Meal } from './Components/Meal/Meal';
import { MealTypeByState } from './Components/State/MealTypeByState';
import { DishesByState } from './Components/State/DishesByState';
import { MealTypeByCuisine } from './Components/Cuisine/MealTypeByCuisine';
import { DishesByCuisine } from './Components/Cuisine/DishesByCuisine';
import { DishesByMeal } from './Components/Meal/DishesByMeal';



function App() {
 
  
  return (
    
    <div className="flex flex-col bg-gray-100 justify-between min-h-screen">
      <div>

    <Navigation/>
      <Routes>
      <Route path ='/' element = {<Hero/>}></Route>
      <Route path='/home/:id' element ={<Home/>}></Route>
      <Route path ='/dishes/:id' element = {<Dishes/>}></Route>
      <Route path='/dishesbystate/:id' element = {<DishesByState/>}></Route>
      <Route path='/dishesbycuisine/:id' element = {<DishesByCuisine/>}></Route>
      <Route path='/dishesbymeal/:id' element = {<DishesByMeal/>}></Route>
      <Route path ='/recipe/:id' element = {<Recipe/>}></Route>
      <Route path ='/meal/:id' element = {<Meal/>}></Route>
      <Route path='/state/meal/:id' element = {<MealTypeByState/>}></Route>
      <Route path='/cuisine/meal/:id' element = {<MealTypeByCuisine/>}></Route>
      <Route path ='/contactus' element = {<Contact/>}></Route>
      <Route path ='/aboutus' element = {<About/>}></Route>
      <Route path ='/submitresume' element = {<SubmitRecipe/>}></Route>
      {/* <Route path ='/' element = {<Home/>}></Route> */}
      </Routes>
      </div>
     
      <Footer/>
    </div>
    
  );
}

export default App;
