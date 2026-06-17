


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