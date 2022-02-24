import React from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    clear: (state) => {
        state.count = 0
      },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
const { increment, decrement, clear,  incrementByAmount } = counterSlice.actions


const store = configureStore({
  reducer: {
      counter: counterSlice.reducer
    },
})

export const useStore = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return {
        count,
        increment: () => dispatch(increment()),
        clear: () => dispatch(clear()),
    }
}


export const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}