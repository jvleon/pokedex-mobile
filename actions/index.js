import {
  GET_ALL_POKEMONS,
  SET_PAGINATION_POkEMONS,
  SET_PAGINATION_BERRIES,
  SET_LOADING_POKEMONS,
  SET_LOADING_BERRIES,
  GET_BERRIES,
} from '../actionTypes';

const getPokemons = (payload) => ({
  type: GET_ALL_POKEMONS,
  payload,
});

const getBerries = (payload) => ({
  type: GET_BERRIES,
  payload,
});

const setPaginationP = (payload) => ({
  type: SET_PAGINATION_POkEMONS,
  payload,
});

const setPaginationB = (payload) => ({
  type: SET_PAGINATION_BERRIES,
  payload,
});

const activeLoadingP = () => ({
  type: SET_LOADING_POKEMONS,
  payload: true,
});

const deactiveLoadingP = () => ({
  type: SET_LOADING_POKEMONS,
  payload: false,
});

const activeLoadingB = () => ({
  type: SET_LOADING_BERRIES,
  payload: true,
});

const deactiveLoadingB = () => ({
  type: SET_LOADING_BERRIES,
  payload: false,
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

export const getPokedex = (
  url = 'https://pokeapi.co/api/v2/pokemon?limit=10',
) => {
  return (dispatch) => {
    dispatch(activeLoadingP());
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
        dispatch(deactiveLoadingP());
        dispatch(setPaginationP(next));
        dispatch(getPokemons(PokemonList));
      })
      .catch(() => dispatch(deactiveLoadingP()));
  };
};

export const getBerriesData = async ({url}) => {
  let data = {};
  if (!url) return;
  try {
    await fetch(url)
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

export const fetchBerries = (
  url = 'https://pokeapi.co/api/v2/berry?limit=15',
) => (dispatch) => {
  dispatch(activeLoadingB());
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(async (response) => {
      const next = response.next;
      let BerriesList = await Promise.all(
        response.results.map(async (item) => {
          let newData = await getBerriesData(item).then((berries) => {
            return {
              name: item.name,
              data: berries,
            };
          });
          return newData;
        }),
      );
      dispatch(deactiveLoadingB());
      dispatch(setPaginationB(next));
      dispatch(getBerries(BerriesList));
    })
    .catch(() => {
      dispatch(deactiveLoadingB());
    });
};
