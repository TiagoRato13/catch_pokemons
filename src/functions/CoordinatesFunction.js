function CoordinatesFunction(direction) {
  let array = direction.toUpperCase().split("");
  let x = 0;
  let y = 0;
  let visited = new Set();
  /* Ash coordinates and pokemons start at 1 because at home he already found one =) */
  let pokemonsFound = 1;
  let coordinatesAt = 1;

  for (let i = 0; i < array.length; i++) {
    // Update player position based on current direction
    if (array[i] === "N") {
      x--;
    } else if (array[i] === "S") {
      x++;
    } else if (array[i] === "E") {
      y++;
    } else if (array[i] === "W") {
      y--;
    } else {
      return "You hacker!! The input has an invalid coordenate. Please check it and try again";
    }

    // Check if current position has been visited before
    let coordenate = `${x},${y}`;
    console.log(`${x}, ${y}`);
    visited.add("0,0");
    if (visited.has(coordenate)) {
      // Increment current position count
      coordinatesAt++;
    } else {
      // Add current position to visited set and increment pokemon count and current position count
      visited.add(coordenate);
      pokemonsFound++;
      coordinatesAt++;
    }
  }
  //Return places visited and pokemons found
  return { coordinatesAt, pokemonsFound };
}

export default CoordinatesFunction;
