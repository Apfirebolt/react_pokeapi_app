import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moveService from "./moveService";

const initialState = {
  moveList: {},
  move: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple moves
export const getMoveData = createAsyncThunk(
  "move/getMoveData",
  async (_, thunkAPI) => {
    try {
      return await moveService.getMove();
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

// Get single move
export const getSingleMove = createAsyncThunk(
  "move/get",
  async (moveId, thunkAPI) => {
    try {
      return await moveService.getMove(moveId);
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

export const moveSlice = createSlice({
  name: "move",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetVariables: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoveData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoveData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moveList = action.payload;
      })
      .addCase(getMoveData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleMove.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleMove.fulfilled, (state, action) => {
        state.isLoading = false;
        state.move = action.payload;
      })
      .addCase(getSingleMove.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = moveSlice.actions;
export default moveSlice.reducer;
