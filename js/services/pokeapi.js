
export const getPokemon = (namePokemon) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + namePokemon;

    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(function (data) {
            return data; 
        });
};
