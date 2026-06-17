
export const obtenerFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
};

export const guardarFavoritos = (favoritosArray) => {
    localStorage.setItem("favoritos", JSON.stringify(favoritosArray));
};
