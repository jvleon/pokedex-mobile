import {GET_BERRIES, SET_PAGINATION_BERRIES, SET_LOADING_BERRIES} from '../actionTypes';
const initialValue = {
  berries: [],
  next: null,
  loading: false,
  currentPokemon: null,
};

export const berries = (state = initialValue, {type, payload}) => {
  switch (type) {
    case GET_BERRIES:
      return {
        ...state,
        berries: [...state.berries, ...payload],
      };
    case SET_PAGINATION_BERRIES:
      return {
        ...state,
        next: payload,
      };
    case SET_LOADING_BERRIES:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
