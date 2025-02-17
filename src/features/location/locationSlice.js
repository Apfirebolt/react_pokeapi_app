import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationService from "./locationService";

const initialState = {
    locationList: {},
    location: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Multiple locations
export const getLocationData = createAsyncThunk(
    "location/getLocationData",
    async (params, thunkAPI) => {
        try {
            return await locationService.getLocation(params);
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

// Get single location
export const getSingleLocation = createAsyncThunk(
    'location/get',
    async (locationId, thunkAPI) => {
        try {
            return await locationService.getSingleLocation(locationId)
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

export const locationSlice = createSlice({
    name: "location",
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
            .addCase(getLocationData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLocationData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.locationList = action.payload;
            })
            .addCase(getLocationData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getSingleLocation.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleLocation.fulfilled, (state, action) => {
                state.isLoading = false;
                state.location = action.payload;
            })
            .addCase(getSingleLocation.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { reset, resetVariables } = locationSlice.actions;
export default locationSlice.reducer;
