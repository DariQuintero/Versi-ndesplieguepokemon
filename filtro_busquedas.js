//const d = document;
export default function searchFilters(input, selector) {

}
//video DE FILTRO DE BUSQUEDA
//const d = document;
//export default function searchFilters(input, selector) {
//  d.addEventListener("keyup", (e) => { //hasta que el usuario deja de escribir
//    if (e.target.matches(input)) { //si el selector coincide con la variable input
//      console.log(e.target.value) //tecla que estemos escribiendo
//
//          if (e.key === "Escape") { //para que se borren los pokemones cuando el usuario presione la tecla Escape
//            e.target.value = ""
//      }
//
//          d.querySelectorAll(selector).forEach((el) => { //busca el valor del input en el selector
//            el.textContent.toLowerCase().includes(e.target.value) //target:  referencia al objeto en el cual se lanzo el evento
//              ? el.classListremove("filter")
//            : el.classList.add("filter")
//  });
//   }
// });

//}
//const order={
//filterData: (data, filter) => {
//  let info=[]

//if (filter

//}


export function FiltroPorGeneracion(unageneracion, pokemon) {
    return pokemon.filter(generation => generation.name == unageneracion)

}




function botonWater() {
    alert("help")
    //ifs para crear objeto de pokemos de agua
    //renderListOfPokemon(tu nuevo objeto de pokemons de agua) 
}



// if (filter === "water") {
//data.type.forEach((item) => {
//const infoFilter = {};
//infoFilter.type = item.type;
//info.push(infoFilter);
//});

//} else if (filter === "water")

function botonFire() {
    alert("help")
}
function botonElectric() {
    alert("help")
}

function botonGrass() {
    alert("help")
}

function botonGround() {
    alert("help")
}


export { botonWater };
export { botonFire };
export { botonElectric };
export { botonGrass };
export { botonGround };


