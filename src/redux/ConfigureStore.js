import { configureStore } from '@reduxjs/toolkit';
import Countries from './API';

const store = configureStore({
  reducer: Countries,
});

export default store;