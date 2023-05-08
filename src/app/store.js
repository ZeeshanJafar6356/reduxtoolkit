import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const reducers = combineReducers({
  allCart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk],
});

// export const store = configureStore({
//   reducer: {
//     allCart: cartReducer,
//   },
// });
