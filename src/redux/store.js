import { combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { homeVideosReducer } from './reducers/videos.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
  });

export default store;