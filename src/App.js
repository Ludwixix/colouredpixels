
import './App.css';
import React, {useState} from 'react';

function App() {
  const [userInput, setUserInput] = useState()
  return (
    <div className='topWrapper'>
      <div onClick={() => setUserInput(userInput ? false: true)} className='wrapper'>
        {builder()}
      </div>
    </div>
  );
}

function builder(){
  return buildUniqueColoursArray().map((x,index) => {
     return <div
      className='pixelItem'
      style = {{backgroundColor: x.value}}>  
      </div>
      }
  )}

function getRandomColour(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  const r = Math.floor(Math.random() * (max - min + 1) + min)
  const g = Math.floor(Math.random() * (max - min + 1) + min)
  const b = Math.floor(Math.random() * (max - min + 1) + min)
  let rgb = `rgb(${r},${g},${b})`
 return rgb
}

function buildUniqueColoursArray() {
  let count = 0;
  let map = new Map();
  let doopsCount = 0;
  while(count < 32768){
    let newCol = false;
    while( newCol === false){
      const newColor = getRandomColour(0,256)
      // if color exists in map get a new one until it doesn't
      if(!map.has(newColor)){
        map.set(newColor, newColor);
        newCol = true;
      } else {
      // count duplicate colours found 
        doopsCount ++
      }
    }
  count = count +1
}
// map to arr
  const mapArray = Array.from( map ).map(([key, value]) => ({ key, value }));
// return arr
  return mapArray
}

export default App;
