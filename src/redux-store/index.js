import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from 'features/quote/quoteSlice';
import authorReducer from 'features/author/authorSlice';

export default configureStore({
  reducer: {
    quote: quoteReducer,
    author: authorReducer,
  },
});
