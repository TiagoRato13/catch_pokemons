import React, { useState } from "react";

/* COMPONENTS */
import ResultPokemonsFound from "../components/ResultPokemonsFound";

/* FUNCTIONS */
import CoordinatesFunction from "../functions/CoordinatesFunction";

function InputDirectionBox() {
  const [coordinates, setCoordinates] = useState("");
  const [pokemonsFound, setPokemonsFound] = useState("-");
  const [coordinatesVisited, setCoordinatesVisited] = useState("-");

  function addDirection(direction) {
    const input = document.getElementById("coordinates");
    input.value += direction;
    input.scrollLeft = input.scrollWidth;
    setCoordinates(input.value);
  }

  const handleCoordinates = (e) => setCoordinates(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the function to make the request using the requestData object
    try {
      let response = CoordinatesFunction(coordinates);

      setPokemonsFound(response.pokemonsFound);
      setCoordinatesVisited(response.coordinatesAt);

      setCoordinates("");
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <div className="input_direction_box">
        <h4>Input the directions:</h4>
        {/* click on button to add coordinates */}
        <div className="coordinate_buttons_box">
          <button
            className="coordinate_buttons"
            onClick={() => addDirection("N")}
          >
            N
          </button>
          <button
            className="coordinate_buttons"
            onClick={() => addDirection("S")}
          >
            S
          </button>
          <button
            className="coordinate_buttons"
            onClick={() => addDirection("E")}
          >
            E
          </button>
          <button
            className="coordinate_buttons"
            onClick={() => addDirection("W")}
          >
            W
          </button>
        </div>
        <form onSubmit={handleSubmit} className="input_direction_form">
          <input
            type="text"
            className="input_direction_input"
            id="coordinates"
            name="directions"
            disabled
            onChange={handleCoordinates}
            value={coordinates}
          />
          <button className="input_direction_button">Search pokemons</button>
        </form>
      </div>
      <ResultPokemonsFound
        pokemonsFound={pokemonsFound}
        coordinatesVisited={coordinatesVisited}
      />
    </>
  );
}

export default InputDirectionBox;
