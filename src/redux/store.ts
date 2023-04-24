import createMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';

import reducers from '@/redux/features';
import rootSaga from "@/redux/sagas";
import {spotifyApi} from '@/redux/services/spotifyCore';


const sagaMiddleware = createMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware:
  (getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(sagaMiddleware)
    .concat(spotifyApi.middleware)
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch