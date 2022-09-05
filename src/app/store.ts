import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import todoReducer from '../features/sliceTodo'
import {apiSliceTodos} from "../features/api/apiSliceTodos";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [apiSliceTodos.reducerPath]: apiSliceTodos.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSliceTodos.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
