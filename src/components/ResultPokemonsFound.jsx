import React from "react";

function ResultPokemonsFound({ pokemonsFound, coordinatesVisited }) {
  return (
    <>
      {typeof coordinatesVisited === "undefined" ? (
        <>
          <div className="result_pokemons_box">
            <h5>
              YOU HACKER!! <br />
              <br />
              The input has incorrect values, check your value and try again
            </h5>
          </div>
        </>
      ) : (
        <div className="result_pokemons_box">
          {typeof coordinatesVisited !== "number" ? (
            <>
              <h3>Pokemons about to be found</h3>
              <p>{pokemonsFound}</p>
              <h3>Places about to be visited</h3>
              <p>{coordinatesVisited}</p>
            </>
          ) : (
            <>
              <h3>Pokemons found</h3>
              <p>{pokemonsFound}</p>
              <h3>Places visited</h3>
              <p>{coordinatesVisited}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
<p>The input has incorrect values, check your value and try again</p>;

export default ResultPokemonsFound;
