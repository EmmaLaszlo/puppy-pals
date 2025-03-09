import { useState } from 'react';  
import { puppyList } from './data.js';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null); 

  // Step 1: Find the selected puppy using find()
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  
  // Step 2: Log the selected puppy to verify
  console.log("Selected Puppy:", featuredPup);

  return (
    <div className="App">
      {/* List of Puppy Names */}
      <div className="puppy-list">
      {puppies.map((puppy) => (
        <p 
          key={puppy.id} 
          onClick={() => setFeatPupId(puppy.id)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {puppy.name}
        </p>
      ))}
      </div>


      {/* Step 3: Display selected puppy details */}
      {featuredPup && (
        <div className="card">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
