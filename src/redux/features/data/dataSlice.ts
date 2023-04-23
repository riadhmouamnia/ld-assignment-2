import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProcesses = createAsyncThunk("data/getProcesses", () => {
  return axios
    .get("https://coraly-academy.onrender.com/processes")
    .then((response) => response.data);
});
export const postProcess = createAsyncThunk(
  "data/postProcess",
  (process: Process) => {
    return axios
      .post("https://coraly-academy.onrender.com/processes", process)
      .then((response) => response.data);
  }
);

type Process = {
  name: string;
  color: string;
  private?: boolean;
};

export type DataType = {
  id: number;
  name: string;
  color: string;
  private?: boolean;
};
type InitialState = {
  processData: DataType[];
  loading: boolean;
  error: string | undefined;
  isSuccess: boolean;
};

const initialState: InitialState = {
  processData: [],
  loading: false,
  error: undefined,
  isSuccess: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
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
    builder.addCase(postProcess.fulfilled, (state, action) => {
      state.processData.push(action.payload);
    });
  },
});

export default dataSlice.reducer;
