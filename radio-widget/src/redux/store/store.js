import { configureStore } from '@reduxjs/toolkit'
import stationSlice from '../features/stationSlice';

export const store = configureStore({
  reducer: {
    stations: stationSlice
  },
})

export default store;