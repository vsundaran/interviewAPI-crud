import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [
      {
        firstName: "Dhanam",
        lastName: "V",
        city: "Chennai",
      },
      {
        firstName: "Sundaran",
        lastName: "V",
        city: "Chennai",
      },
      {
        firstName: "Vaali",
        lastName: "V",
        city: "Chennai",
      },
    ],
    cityData: "",
    lastNameData: "",
    firstNameData: "",
  },
  reducers: {
    addDatas: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    clear: (state) => {
      state.cityData = "";
      state.lastNameData = "";
      state.firstNameData = "";
    },

    cityDataOnchange: (state, action) => {
      state.cityData = action.payload;
    },

    lastNameDataOnchange: (state, action) => {
      state.lastNameData = action.payload;
    },

    firstNameDataOnchange: (state, action) => {
      state.firstNameData = action.payload;
    },

    deleteData: (state, action) => {
      let filterData = state.data.map((item, index) => {
        if (index != action.payload) {
          return item;
        } else {
          return null;
        }
      });
      state.data = filterData;
    },

    edit: (state, action) => {
      let filterdItemArray = state.data[action.payload];
      state.cityData = filterdItemArray.city;
      state.lastNameData = filterdItemArray.lastName;
      state.firstNameData = filterdItemArray.firstName;

      let filterData = state.data.map((item, index) => {
        if (index != action.payload) {
          return item;
        } else {
          return null;
        }
      });
      state.data = filterData;
    },
  },
});

export const {
  edit,
  clear,
  addDatas,
  deleteData,
  cityDataOnchange,
  lastNameDataOnchange,
  firstNameDataOnchange,
} = DataSlice.actions;
export default DataSlice.reducer;
