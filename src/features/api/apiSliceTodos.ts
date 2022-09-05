import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Item, ITodoReducer} from "../sliceTodo/todoState";

export const apiSliceTodos = createApi({
  reducerPath: 'todosAPI',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
  endpoints: (build) => ({
    getTodos: build.query<Item[],string>({
      query: () => '/todos',
      providesTags: () => ['Todo']
    }),
    addProduct: build.mutation<Item,Item>({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body:todo,
      }),
      invalidatesTags:['Todo']
    }),
    removeProduct: build.mutation<Item,number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['Todo']
    }),
    completedProduct: build.mutation<Item,Item>({
      // query: ({id}) => ({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: 'PATCH',
        body:todo
      }),
      invalidatesTags:['Todo']
    }),
    renameProduct: build.mutation<Item,Item>({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: 'PATCH',
        body:todo
      }),
      invalidatesTags:['Todo']
    }),
  })
})
export const {
  useGetTodosQuery,
  useAddProductMutation,
  useRemoveProductMutation,
  useCompletedProductMutation,
  useRenameProductMutation
} = apiSliceTodos