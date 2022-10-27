import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './slices/tasksSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer,
    filter: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
