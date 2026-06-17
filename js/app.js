let pokemonActual = null;

<<<<<<< Updated upstream

function saveFavorite(){
    if(!pokemonActual){
        alert("Debes de buscar un pokemon");
        return;
    }

    let favoritos= JSON.parse(localStorage.getItem("favoritos")) || [];

    let pokExistente= favoritos.some(function(pokemon){
        return pokemon.nombre === pokemonActual.nombre;
    })

    if(!pokExistente){
        favoritos.push(pokemonActual);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Pokemon ha sido agregado a favoritos. ");
    }else{
        
    }

    upd
}
=======
const barraBusqueda = document.getElementById("barra-busqueda");
const btnBuscar = document.getElementById("btn-buscar");
const btnFavorito = document.getElementById("btn-favorito");

btnBuscar.addEventListener("click", searchPokemon);
btnFavorito.addEventListener("click"savefavorite);

document.addEventListener("DOMContentLoaded", function() {
    updateFavoritesList();
});
>>>>>>> Stashed changes
