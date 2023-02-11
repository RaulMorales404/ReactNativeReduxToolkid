import {createSlice} from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    isLoadinPokemons: state => {
      state.isLoading = true;
    },
    setPokemons: (state, actions) => {
      state.isLoading = false;
      state.page = actions.payload.page;
      state.pokemons = actions.payload.pokemons;
    },
  },
});
// Action creators are generated for each case reducer function
export const {isLoadinPokemons, setPokemons} = pokemonSlice.actions;
