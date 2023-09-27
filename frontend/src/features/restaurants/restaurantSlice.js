import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import restaurantService from './restaurantService'

const initialState = {
  restaurants: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createRestaurant = createAsyncThunk(
  'restaurants/create',
  async (restaurantData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await restaurantService.createRestaurant(restaurantData, token)
    } catch (error) {
      const message =
        (error.response && error.response.data & error.reponse.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurant.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.restaurants.push(action.payload)
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = restaurantSlice.actions
export default restaurantSlice.reducer
