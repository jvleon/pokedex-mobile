import {GET_ALL_POKEMONS, SET_PAGINATION} from '../actionTypes';

const getPokemons = (payload) => ({
  type: GET_ALL_POKEMONS,
  payload,
});

const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
});

export const getPokemonsData = async (name) => {
  let data = {};
  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        data = response;
      })
      .catch((e) => {
        console.log(e);
      });
  } catch {
    console.log('error on fetch');
  }
  return data;
};

export const getPokedex = (url='https://pokeapi.co/api/v2/pokemon?limit=10') => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(async (response) => {
        const next = response.next;
        let PokemonList = await Promise.all(
          response.results.map(async (data) => {
            let newData = await getPokemonsData(data.name).then((pokemon) => {
              return {
                name: data.name,
                extra_data: pokemon,
              };
            });
            return newData;
          }),
        );
        dispatch(setPagination(next));
        dispatch(getPokemons(PokemonList));
      });
  };
};
