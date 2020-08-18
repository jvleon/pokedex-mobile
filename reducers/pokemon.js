import {GET_ALL_POKEMONS, SET_PAGINATION} from '../actionTypes';
const initialValue = {
  pokemons: [],
  next: null,
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
    default:
      return state;
  }
};
