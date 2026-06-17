let pokemonActual = null;

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
        alert("Pokemon ya esta agregado a favoritos. ");
    }
}
    updateFavoritesList();
}
}
const barraBusqueda = document.getElementById("barra-busqueda");
const btnBuscar = document.getElementById("btn-buscar");
const btnFavorito = document.getElementById("btn-favorito");

btnBuscar.addEventListener("click", searchPokemon);
btnFavorito.addEventListener("click", saveFavorite);

//Llama a updateFavoritesList() para mostrar los favoritos guardados.
document.addEventListener("DOMContentLoaded", function () {
    updateFavoritesList();
});