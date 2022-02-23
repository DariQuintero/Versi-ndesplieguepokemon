
import data from "./data/pokemon/pokemon.js";
import { renderPokemonCard } from "./components.js";
/*import { botonWater } from "./filtro_busquedas.js";
import { botonFire } from "./filtro_busquedas.js";
import { botonElectric } from "./filtro_busquedas.js";
import { botonGrass } from "./filtro_busquedas.js";
import { botonGround } from "./filtro_busquedas.js";
import { typeWater } from "./filtro_busquedas.js";
import searchFilters from "./filtro_busquedas.js";*/

/*Inicia Función para mostrar todos los pokemones */
export const renderListOfPokemon = () => {
    const pokemonList = document.getElementById("pokemon-list");
    const pokemon = data.pokemon;

    const pokemonListHTML = pokemon.map((pokemon) => {
        const pokemonCardHTML = renderPokemonCard(pokemon);
        return pokemonCardHTML;
    }

    ).join("\n");
    pokemonList.innerHTML = pokemonListHTML;
}

renderListOfPokemon()
    /*Termina Función para mostrar todos los pokemones */


    ;

console.log(data)
searchFilters(".card-filter", "data");

const generation = document.getElementById('generation')
generation.addEventListener('change', (e) => {
    console.log(e.target.value);
})
//botones
//agregar observador

// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';
//Filtro agua
//let botonWater = document.getElementById("water");
//botonWater.addEventListener("click", (event) => [
//  let waterTypeResults = typeWater(generation);
//let allPokemonW = ""

//for (let i = 0; i < resultsFire.length; i++) {
//  allPokemonW += generatorPokemon(waterTypeResults[i]);
//}
//allPokemonW.innerHTML = allHTML;
//]









renderListOfPokemon();
let btnfilter = document.getElementsByClassName("btn-filter");
console.log(btnfilter)
for (let i = 0; i < btnfilter.length; i++) {
    btnfilter[i].addEventListener("click", prueba);
}


function prueba(event) {
    console.log(event.target.id)
    console.log(data)
}

export const pokedexWater = document.getElementById("pokebola");
let vacio = [];

function pokemonPrueba(data) {
    for (let i = 0; i < data.length; i++) {
        vacio += `${data[i].name} 
        <img src="${data[i].img}">`; pokedex.innerHTML = vacio;
        pokedex.innerHTML = vacio;
    }
} pokedex.innerHTML = vacio; console.log(pokemonPrueba)


//Recorrer elemento por elemento de toda data (1 a 1 los elementos)
//Condicional elemento.type=event.target.id
//Guardar en un arreglo nuevo las coincidencias










water.addEventListener('change', () => {


})

