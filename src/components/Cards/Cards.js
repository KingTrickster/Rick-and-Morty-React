import React from 'react'

const Cards = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((character) =>{
      let { id, name } = character;
      return (
      <div key={id} className="col-4">{name}</div>);
    });
  } else {
    display = "No Characters Found.";
  }

  return <>{display}</>;
};

export default Cards;