import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

const initialState = {
  itemList: {},
  item: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple items
export const getItemData = createAsyncThunk(
  "item/getItemData",
  async (_, thunkAPI) => {
    try {
      return await itemService.getItem();
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

// Get single item
export const getSingleItem = createAsyncThunk(
  "item/get",
  async (itemId, thunkAPI) => {
    try {
      return await itemService.getSingleItem(itemId);
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

export const itemSlice = createSlice({
  name: "item",
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
      .addCase(getItemData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItemData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemList = action.payload;
      })
      .addCase(getItemData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(getSingleItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = itemSlice.actions;
export default itemSlice.reducer;
