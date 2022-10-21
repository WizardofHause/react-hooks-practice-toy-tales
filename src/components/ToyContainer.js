import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy, handleLikes }) {

  const toyCard = toys.map((toy) => {
    return (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikes}
      />
    )
  })

  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
