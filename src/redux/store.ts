import { configureStore } from '@reduxjs/toolkit';

import reducers from '@/redux/features';
import {spotifyApi} from '@/redux/services/spotifyCore';

export const store = configureStore({
  reducer: reducers,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(spotifyApi.middleware)
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch