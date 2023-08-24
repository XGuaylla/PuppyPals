import { useState } from "react";
import { puppyList } from "./data";
// import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

function handleClick() {
  //Logic
}
const featuredPup = puppies.find((pup) => pup.id === featPupId)
console.log(featuredPup)
  return (
    <>
      <div id="main">
        {puppies.map((puppy) => {
          return (
          <p className="dogList" onClick={() => { setFeatPupId(puppy.id)}} 
          key={puppy.id}>{puppy.name}</p>);
        })}
        { featPupId && (
          <div id="featuredDog">
            <h2 className="dogName">{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
