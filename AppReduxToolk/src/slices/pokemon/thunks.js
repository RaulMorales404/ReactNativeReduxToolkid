const url = 'https://pokeapi.co/api/v2/pokemon?';
import {pokeApi} from '../../api/api';
import {isLoadinPokemons, setPokemons} from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(isLoadinPokemons());

    const resp = await pokeApi.get(`pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({page: page + 1, pokemons: resp.data}));
  };
};
