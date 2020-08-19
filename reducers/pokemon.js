import {GET_ALL_POKEMONS, SET_PAGINATION, SET_LOADING} from '../actionTypes';
const initialValue = {
  pokemons: [],
  next: null,
  loading: false,
  currentPokemon: null,
};

export const pokemons = (state = initialValue, {type, payload}) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...payload],
      };
    case SET_PAGINATION:
      return {
        ...state,
        next: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
