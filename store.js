import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {pokemons} from './reducers/pokemon';
import {berries} from './reducers/berries';

const rootReducer = combineReducers({pokemons, berries});

export default createStore(rootReducer, applyMiddleware(thunk));
