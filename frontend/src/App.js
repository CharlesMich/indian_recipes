import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {State }from './Components/State'
import {Cuisine} from './Components/Cuisine'
import {Ingredient} from './Components/Ingredient'
import {Meal} from './Components/Meal'
import {VegNonVeg} from './Components/VegNonVeg'

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  return (
    <div className=" bg-gray-100">
      <ul className="tabs flex flex-row gap-10">
        <div>Sort by</div>
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
         State
        </li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
          Cuisine
        </li>
        <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
          Meal
        </li>
        <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
         Veg / Non Veg
        </li>
        <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>
         Ingredient
        </li>
      </ul>

      <div className="content">
        {activeTab === 0 && <State />}
        {activeTab === 1 && <Cuisine />}
        {activeTab === 2 && <Meal/>}
        {activeTab === 3 && <VegNonVeg/>}
        {activeTab === 4 && <Ingredient/>}
      </div>
    </div>
  );
}

export default App;
