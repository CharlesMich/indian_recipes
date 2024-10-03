import React from 'react'
import {useEffect, useState} from 'react'
import {State }from './State'
import {Cuisine} from './Cuisine'
import {Ingredient} from './Ingredient'
import {Meal} from './Meal'
import {Veg} from './Veg'
import { NonVegetarian } from './NonVegetarian'

export const Home = () => {

    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-container bg-gray-100">
    <ul className="tabs flex flex-row gap-10 mx-20 mt-20">
      <div className="font-semibold">Browse by</div>
      <li className={activeTab === 0 ? 'active text-coral-red cursor-pointer' : 'cursor-pointer'} onClick={() => handleTabClick(0)}>
       State
      </li>
      <li className={activeTab === 1 ? 'active  text-coral-red cursor-pointer' : 'cursor-pointer'} onClick={() => handleTabClick(1)}>
        Cuisine
      </li>
      <li className={activeTab === 2 ? 'active  text-coral-red cursor-pointer' : 'cursor-pointer'} onClick={() => handleTabClick(2)}>
        Meal
      </li>
      <li className={activeTab === 3 ? 'active  text-coral-red cursor-pointer' : 'cursor-pointer'} onClick={() => handleTabClick(3)}>
       Vegetarian
      </li>
      <li className={activeTab === 4 ? 'active  text-coral-red' : ''} onClick={() => handleTabClick(4)}>
       Non Vegetarian
      </li>
    </ul>

    <div className="content">
      {activeTab === 0 && <State />}
      {activeTab === 1 && <Cuisine />}
      {activeTab === 2 && <Meal/>}
      {activeTab === 3 && <Veg/>}
      {activeTab === 4 && <NonVegetarian/>}
    </div>
  </div>
  )
}
