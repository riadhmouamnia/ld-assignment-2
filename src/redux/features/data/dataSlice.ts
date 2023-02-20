import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cacheService } from "utils/cacheService";

export const getProcesses = createAsyncThunk("data/processData", () => {
  return axios
    .get("http://localhost:3000/processes")
    .then((response) => response.data);
});

export type DataType = {
  id: number;
  processName: string;
  color: string;
  private?: boolean;
};
type InitialState = {
  processData: DataType[];
  loading: boolean;
  error: string | undefined;
  isSuccess: boolean;
};

// const data = cacheService.loadState("data");
const initialState: InitialState = {
  processData: [],
  loading: false,
  error: undefined,
  isSuccess: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addProcess(state, action) {
      state.processData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProcesses.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProcesses.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.processData = action.payload;
      state.error = undefined;
    });
    builder.addCase(getProcesses.rejected, (state, action) => {
      state.loading = false;
      state.isSuccess = false;
      state.processData = [];
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
export const { addProcess } = dataSlice.actions;
