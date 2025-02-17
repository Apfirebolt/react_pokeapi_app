import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import machineService from "./machineService";

const initialState = {
  machineList: {},
  machine: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple machines
export const getMachineData = createAsyncThunk(
  "machine/getMachineData",
  async (params, thunkAPI) => {
    try {
      return await machineService.getMachine(params);
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

// Get single machine
export const getSingleMachine = createAsyncThunk(
  "machine/get",
  async (machineId, thunkAPI) => {
    try {
      return await machineService.getSingleMachine(machineId);
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

export const machineSlice = createSlice({
  name: "machine",
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
      .addCase(getMachineData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMachineData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.machineList = action.payload;
      })
      .addCase(getMachineData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSingleMachine.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleMachine.fulfilled, (state, action) => {
        state.isLoading = false;
        state.machine = action.payload;
      })
      .addCase(getSingleMachine.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = machineSlice.actions;
export default machineSlice.reducer;
