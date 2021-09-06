import React from 'react';
import './App.css'
import FruitsList from './components/Fruits/FruitsList';

function App() {
  return (
    <div className="App">
      <h1>Hello, welcome to the Fruit Gallery!</h1>
      <h2>Click on a fruit to learn more about it!</h2>
      <FruitsList/>
    </div>
  );
}

export default App;
