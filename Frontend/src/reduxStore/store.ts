import { configureStore } from '@reduxjs/toolkit'
import headingSlice from './slices/blogwriter/category'

export const store = configureStore({
  reducer: {
    heading : headingSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch