import React from 'react';
import Hero from './section/Hero';
import Advantages from './section/Advantages';
import Instruction from './section/Instruction';
import Savings from './section/Savings';

import './App.css';

const App = () => {
  return (
    <div>
      <Hero />
      <Instruction />
      <Advantages />
      <Savings />
    </div>
  );
}

export default App;
