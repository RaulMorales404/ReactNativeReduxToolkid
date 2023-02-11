import {createSlice} from '@reduxjs/toolkit';

//Puedes tener el incial state
// const initialState = {
//   value: 0,
// };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
    time: 0,
  },
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    moreValue: (state, actions) => {
      console.log(actions.payload.age);
      state.counter += actions.payload.age;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, moreValue} = counterSlice.actions;
