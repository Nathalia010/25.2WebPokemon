import * as pokeApi from './services/pokeapi.js';
import * as storage from './storage/localStorage.js';

let pokemonActual = null;

const barraBusqueda = document.getElementById("barra-busqueda");
const btnBuscar = document.getElementById("btn-buscar");
const btnFavorito = document.getElementById("btn-favorito");

function searchPokemon() {

    console.log("Buscando Pokémon...");

    const nombre = barraBusqueda.value.trim().toLowerCase();

    console.log(nombre);

    if (!nombre) {
        alert("Por favor, escribe el nombre de un Pokémon.");
        return;
    }

    pokeApi.getPokemon(nombre)
        .then(function(data) {

            console.log(data);

            pokemonActual = {
                nombre: data.name,
                image: data.sprites.front_default
            };

            document.getElementById("imagen-principal").src =
                pokemonActual.image;

            document.getElementById("nombre-pokemon").textContent =
                "Nombre: " + pokemonActual.nombre.toUpperCase();

        })
        .catch(function(error) {

            console.error(error);

            alert("¡Error! Pokémon no encontrado");
        });
}

function saveFavorite() {

    if (!pokemonActual) {
        alert("Debes de buscar un pokemon primero.");
        return;
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
}

function updateFavoritesList() {

    let favoritos = storage.obtenerFavoritos();

    let contenedor = document.getElementById("pokemon-guardado");

    contenedor.innerHTML = "";

    favoritos.forEach(function (pokemon) {

        let tarjeta = document.createElement("div");

        tarjeta.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.nombre}" width="80">
            <p>${pokemon.nombre}</p>
        `;

        contenedor.appendChild(tarjeta);

    });
}

btnBuscar.addEventListener("click", searchPokemon);
btnFavorito.addEventListener("click", saveFavorite);

document.addEventListener("DOMContentLoaded", function () {
    updateFavoritesList();
});