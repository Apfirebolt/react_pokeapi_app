import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import typeService from "./typeService";

const initialState = {
    typeList: {},
    type: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Get Multiple types
export const getTypeData = createAsyncThunk(
    "type/getTypeData",
    async (params, thunkAPI) => {
        try {
            return await typeService.getType(params);
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

// Get single type
export const getSingleType = createAsyncThunk(
    'type/get',
    async (typeId, thunkAPI) => {
        try {
            return await typeService.getSingleType(typeId)
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

export const typeSlice = createSlice({
    name: "type",
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
            .addCase(getTypeData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTypeData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.typeList = action.payload;
            })
            .addCase(getTypeData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getSingleType.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSingleType.fulfilled, (state, action) => {
                state.isLoading = false;
                state.type = action.payload;
            })
            .addCase(getSingleType.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { reset, resetVariables } = typeSlice.actions;
export default typeSlice.reducer;
