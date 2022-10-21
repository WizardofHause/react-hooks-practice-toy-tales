import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((toys) => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(inputToy){
    setToys([inputToy, ...toys])
  }

  const handleDeleteToy = (id) => {
    const newToyArray = toys.filter(toy => toy.id !== id)
    setToys(newToyArray)
  }

  const handleLikes = (updatedToy) => {
    const updatedLikes = toys.map((toy) => 
      toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedLikes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        handleDeleteToy={handleDeleteToy}
        handleLikes={handleLikes}
      />
    </>
  );
}

export default App;
