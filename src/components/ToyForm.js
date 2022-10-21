import React, { useState } from "react";

function ToyForm({ handleNewToy }) {
  const [formToy, setFormToy] = useState({
    name: '',
    image: '',
  })

  function handleChange(e) {
    setFormToy({
      ...formToy,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const inputToy = {
      name: formToy.name,
      image: formToy.image,
      likes: 0
    }
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputToy)
    })
      .then((r) => r.json())
      .then(handleNewToy(inputToy))
      setFormToy({
        name: '',
        image: '',
      })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formToy.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
