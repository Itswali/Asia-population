import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  selectedCountry: {},
};

const baseUrl = 'https://world-population3.p.rapidapi.com/continents/ASIA?rank=1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '433ce13791mshdb40fb24f61a72ap1be8e4jsn380659aafd36',
    'X-RapidAPI-Host': 'world-population3.p.rapidapi.com',
  },
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(baseUrl, options);
    const data = await response.json();
    return data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  reducers: {
    setSelectedCountry: (state, action) => {
      const updatedState = { ...state, selectedCountry: action.payload };
      return updatedState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      const updatedState = {
        ...state,
        countries: [...action.payload].slice(0, 10),
      };
      return updatedState;
    });
  },
});

export const { setSelectedCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
