import logo from './logo.svg';
import './App.css';


// Object Deconstructing
// Fancy import syntax
// Will explain later
import {useState} from 'react';

// Same as:
// import React from 'react';
// const useState = React.useState;

//If this was node, we'd do:
// const HelloCullen = require('./HelloCullen')

//Client side (react) will do:
import HelloCullen from './HelloCullen';

// App is a component
// Components are functions that return JSX
// React convention is to use Pascal-case instead of camel-case
function App() {
  // This won't render!
  // let drinkCount = 1;

  // Fancy useState syntax!
  // useState is a hook

  // Array Destructuring
  // const returnValOfUseState = useState(1);
  // const drinkCount = returnValOfUseState[0];
  // const setDrinkCount = returnValOfUseState[1];

  // Tracks data inside of State in order to keep data and dom in sync
  //
  // drinkCount is the current value of my state
  // setDrinkCount  lets me change the value of my state
  // Must be used within a function
  const [drinkCount, setDrinkCount] = useState(1);

  let name = 'Dusty';

  let myH1 = <h1>Go home, {name}, you're drunk</h1>;


  // "HTML" is actually "JSX"
  // "Javascript eXtended"
  // as in App.jsx
  return (
    <div >
      <h1>Cullen Happy Hour</h1>
      <p>{name} has had {drinkCount} drink</p>

      <button onClick={() => setDrinkCount(drinkCount + 1)}>
        Drink Up!
      </button>
      <button onClick={() => setDrinkCount(0)}>
        Sober Up...
      </button>
    </div>
  );
}

export default App;
