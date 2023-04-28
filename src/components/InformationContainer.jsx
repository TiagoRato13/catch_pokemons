import React from "react";

function InformationContainer() {
  return (
    <div className="information_container_box">
      <h2>How to search for Pokemons:</h2>
      <p>
        Ash is leaving his house to go catch Pokemons and we will help him find
        the directions. <br />
        Even before leaving the house he already has his 1 favorite Pokemon
        Pikachu.
      </p>
      <p>
        To help him with his travel plan input the values for North(N),
        South(S), East(E) and West(W) into the input box using the buttons, and
        for every new house he goes to he will find a new Pokemon.
      </p>
      <p>
        After getting the inputs click on the button '
        <span>Search Pokemons</span>' and see how many Ash has found.
      </p>
      <p>
        <span>NOTES: </span> If Ash passes by the same house twice he will{" "}
        <b>NOT</b> be getting a new Pokemon. <br />
        If Ash decides to stay home he will only have his <b>1</b> Pokemon
        (Pikachu) and <b>1</b> place visited (his own house).
      </p>
    </div>
  );
}

export default InformationContainer;
