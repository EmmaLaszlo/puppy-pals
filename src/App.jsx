import { useState } from 'react';  // Step 1: Import useState
import { puppyList } from './data.js';
import './App.css';

function App() {

  // Step 2: Use useState to manage the puppyList data
  const [puppies, setPuppies] = useState(puppyList);

  // Step 3: Log the puppies array
  console.log(puppies);

  return <div className="App">
 {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })
      }

  </div>;
}

export default App;