import axios from "axios";
import { AppDispatch } from "redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { cacheService } from "utils/cacheService";

export type DataType = {
  id: number;
  processName: string;
  color: string;
  private?: boolean;
};
type InitialState = {
  processData: DataType[];
  loading: boolean;
  error: string | null;
  isSuccess: boolean;
};

const data = cacheService.loadState("data");
const initialState: InitialState = {
  processData: [],
  loading: false,
  error: null,
  isSuccess: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state.processData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addProcess(state, action) {
      state.processData.push(action.payload);
    },
  },
});

export default dataSlice.reducer;
export const { setData, setLoading, setError, addProcess } = dataSlice.actions;
