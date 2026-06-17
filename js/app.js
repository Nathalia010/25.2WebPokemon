
import * as pokeApi from './services/pokeapi.js';
import * as storage from './storage/localStorage.js';

let pokemonActual = null;

function searchPokemon() {
    const nombre = barraBusqueda.value.trim().toLowerCase();

    if (!nombre) {
        alert("Por favor, escribe el nombre de un Pokémon.");
function updateFavoritesList() {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    let contenedor = document.getElementById("favoritos");

    contenedor.innerHTML = "";

    favoritos.forEach(function(pokemon){

        let tarjeta = document.createElement("div");

        tarjeta.innerHTML = `
            <img src="${pokemon.image}">
            <p>${pokemon.nombre}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}
      /*
function saveFavorite(){
    if(!pokemonActual){
        alert("Debes de buscar un pokemon");
        return;
    }
*/
    pokeApi.getPokemon(nombre)
        .then(function (data) {
            pokemonActual = {
                nombre: data.name,
                image: data.sprites.front_default
            };

            const contenedorResultado = document.getElementById("resultado-busqueda");
            contenedorResultado.innerHTML = `
                <h3>${pokemonActual.nombre.toUpperCase()}</h3>
                <img src="${pokemonActual.image}" alt="${pokemonActual.nombre}">
            `;
        })
        .catch(function (error) {
            alert('¡Error! Pokémon no encontrado');
            pokemonActual = null; 
        });
}

function saveFavorite() {
    if (!pokemonActual) {
        return alert("Debes de buscar un pokemon primero.");
    }

    let favoritos = storage.obtenerFavoritos();

    let pokExistente = favoritos.some(function (pokemon) {
        return pokemon.nombre === pokemonActual.nombre;
    });

    if (!pokExistente) {
        favoritos.push(pokemonActual);
        storage.guardarFavoritos(favoritos);
        alert("Pokémon ha sido agregado a favoritos.");
    } else {
        alert("Pokémon ya está agregado a favoritos.");
    }

    updateFavoritesList();


function updateFavoritesList() {
    let favoritos = storage.obtenerFavoritos();
    let contenedor = document.getElementById("favoritos");

    contenedor.innerHTML = "";

    favoritos.forEach(function (pokemon) {
        let tarjeta = document.createElement("div");
        tarjeta.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.nombre}">
            <p>${pokemon.nombre}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}
}
updateFavoritesList();


const barraBusqueda = document.getElementById("barra-busqueda");
const btnBuscar = document.getElementById("btn-buscar");
const btnFavorito = document.getElementById("btn-favorito");

btnBuscar.addEventListener("click", searchPokemon);
btnFavorito.addEventListener("click", saveFavorite);


//Llama a updateFavoritesList() para mostrar los favoritos guardados.

document.addEventListener("DOMContentLoaded", function () {
    updateFavoritesList();
});