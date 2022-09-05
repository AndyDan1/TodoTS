export type Item = {
  id: number,
  title: string,
  completed: boolean;
}
export interface ITodoReducer {
  todos: Item[];
}

export const todoState: ITodoReducer = {
  todos: [],
}