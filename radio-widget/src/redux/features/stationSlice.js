import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchRadionStationData = createAsyncThunk(
  'station/fetchRadionStationData',
  async () => {
    return fetch('https://khayruls-code.github.io/json-api/radioStationData.json').then(res => res.json())
  }
)

const initialState = {
  stations: [],
  status: null
}

export const stationSlice = createSlice({
  name: 'station',
  initialState,

  extraReducers: {
    [fetchRadionStationData.pending]: (state, action) => {
      state.state = 'Loading'
    },
    [fetchRadionStationData.fulfilled]: (state, { payload }) => {
      state.stations = payload
      state.state = 'Success'
    },
    [fetchRadionStationData.rejected]: (state, action) => {
      state.status = 'Failed'
    }
  }

})


export default stationSlice.reducer