import React from 'react';
import Hero from './section/Hero';
import Advantages from './section/Advantages';
import Instruction from './section/Instruction';
import Savings from './section/Savings';
import Benefits from './section/Benefits';

import './App.css';

const App = () => {
  return (
    <div>
      <Hero />
      <Instruction />
      <Advantages />
      <Savings />
      <Benefits />
    </div>
  );
}

export default App;
