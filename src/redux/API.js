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

