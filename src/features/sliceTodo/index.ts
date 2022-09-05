import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item, ITodoReducer, todoState} from "./todoState";

export const slice = createSlice({
  name: 'todo',
  initialState: todoState,
  reducers: {
    addTodo: (state, action: PayloadAction<Item>) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      })
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload)
    },
    completedTodo: (state, action: PayloadAction<number>) => {
      const check = state.todos.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    renameTodo: (state, action: PayloadAction<number>) => {
      const check = state.todos.map(item => {
        if (item.id === action.payload) {
          //не желательно так делать
          const test = window.prompt()
          if (test) {
            item.title = test
          }
        }
      })

    },
  }
})

export const {addTodo, removeTodo, completedTodo, renameTodo} = slice.actions
export default slice.reducer