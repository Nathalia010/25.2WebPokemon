

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