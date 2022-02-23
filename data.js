// estas funciones son de ejemplo
import data from "./data/pokemon/pokemon.js";
// Importamos los datos de el archivo de la carpeta de pokemon




export const getPokemonByNum = (num) => {
  return data.pokemon.find((pokemon) => {
    return pokemon.num === num;
  }

  );
}

  ;
//version 1 filtrado agua
export const typeWater = (generation) => {
  const resultsWater = [];
  for (let i = 0; i < generation.length; i++) {
    if (generation[i].type == "water") {
      resultsWater.push(generation[i]);
    }
  }
  return resultsWater;
}
//