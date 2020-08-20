import {
  GET_ALL_POKEMONS,
  SET_PAGINATION_POkEMONS,
  SET_LOADING_POKEMONS,
} from '../actionTypes';
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
    case SET_PAGINATION_POkEMONS:
      return {
        ...state,
        next: payload,
      };
    case SET_LOADING_POKEMONS:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
