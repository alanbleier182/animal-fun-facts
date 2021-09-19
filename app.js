// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { animals } from './animals';

// Title and Background
const title = '';
const background = (
  <img 
    className="background" 
    alt="ocean" 
    src="/images/ocean.jpg" 
  />);
const showBackground = true;

// Event Function
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const index = Math.floor(Math.random() * animalInfo.facts.length);
  const fact = animalInfo.facts[index];
  document.getElementById('fact').innerHTML = fact;
}

// Fill 'images' Array with animals
const images = [];
for (const animal in animals) {
  images.push(<img 
                key={animal} 
                className='animal'
                alt={animal} 
                src={animals[animal].image} 
                aria-label={animal} 
                role="button"
                onClick={displayFact}
              />);
}

// JSX expression to render
// Alternative version of line 44:
// <h1>{ title || 'Click an animal for a fun fact' }</h1>
const animalFacts = (
  <div>
    <h1>{ title === '' ? 'Click an animal for a fun fact' : title }</h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>
      {images}
    </div>
  </div>);

// Render
ReactDOM.render(
  animalFacts,
  document.getElementById("root")
  );
