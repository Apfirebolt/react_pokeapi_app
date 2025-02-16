import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pokemonService from "./pokemonService";

const initialState = {
  pokemonList: {},
  pokemon: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple pokemon
export const getPokemonData = createAsyncThunk(
  "pokemon/getPokemonData",
  async (_, thunkAPI) => {
    try {
      return await pokemonService.getPokemon();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Get single pokemon
export const getSinglePokemon = createAsyncThunk(
  'pokemon/get',
  async (pokemonId, thunkAPI) => {
    try {
      return await pokemonService.getSinglePokemon(pokemonId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetVariables: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemonData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemonList = action.payload;
      })
      .addCase(getPokemonData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSinglePokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSinglePokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemon = action.payload;
      })
      .addCase(getSinglePokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, resetVariables } = pokemonSlice.actions;
export default pokemonSlice.reducer;