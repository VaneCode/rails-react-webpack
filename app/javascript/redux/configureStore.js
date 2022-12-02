import { configureStore } from '@reduxjs/toolkit';
import reducerGreetings from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetings: reducerGreetings,
  },
});

export default store;