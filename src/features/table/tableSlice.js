import { createSlice } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: {
    value: [],
    status: "All",
  },
  reducers: {
    setTableData: (state, action) => {
      state.value = action.payload;
    },
    setStatus: (state, action) => {
        state.status = action.payload;
    }
  },
});

export const { setTableData, setStatus } = tableDataSlice.actions;

export const fetchTableData = () => dispatch => {
  return fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
  .then((response) => response.json())
  .then((json) => dispatch(setTableData(json.data)));
};

export default tableDataSlice.reducer;
