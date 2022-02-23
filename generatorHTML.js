export default function generatorHTML(unPokemon) {
    return `<div class="CardContainer">
<div class="card">
<span class="pokemonData" id=pokemonData> 
<h3 id="pokemonWater"> Water: ${unPokemon.water}</h3>
<h4 id="pokemonFire"> Fire: ${unPokemon.fire}</h4>
<h5 id="pokemonElectric"> Electric: ${unPokemon.electric}</h5>
<h6 id="pokemonGrass"> Grass: ${unPokemon.grass}</h6>
<h7 id="pokemonWNumber"> Number: ${unPokemon.number}</h7>
<h8 id="pokemonType"> Size: ${unPokemon.size}</h8>
</span>
</div>
</div>`
}