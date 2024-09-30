import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState(null);

useEffect(()=> {
  fetch('/Data/states.json')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => console.error("Error fetching data", error))
}, [])

if (!data) {
  return <div>Loading...</div>
}
  return (
   <>
   <div>{data.states}</div>
   </>
  );
}

export default App;
