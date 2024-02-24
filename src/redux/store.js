import { combineReducers} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    auth: authReducer,
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
  });

export default store;