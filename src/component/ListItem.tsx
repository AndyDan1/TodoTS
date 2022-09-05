import React, {FC, memo} from 'react';
import {useAppSelector} from "../app/hooks";
import Item from "./Item";
import {apiSliceTodos, useGetTodosQuery} from "../features/api/apiSliceTodos";

interface IListItemProp {
  sortValue: number,
}

//FC<IListItemProp>

const ListItem: FC<IListItemProp> = ({sortValue}) => {
  const {data=[]} = apiSliceTodos.useGetTodosQuery('')

  console.log(data)

  const all = data.map((todo, index) => <Item key={todo.id} index={index} {...todo}/>)
  const done = data.map((todo, index) =>
    todo.completed
      ?
      <Item key={todo.id} title={todo.title} index={index} id={todo.id} completed={todo.completed}/>
      :
      null
  )
  const todo = data.map((todo, index) =>
    !todo.completed
      ?
      <Item key={todo.id} title={todo.title} index={index} id={todo.id} completed={todo.completed}/>
      :
      null
  )
  return (
    <ul>
      {
        (sortValue === 0 && all)
        ||
        (sortValue === 1 && done)
        ||
        (sortValue === 2 && todo)
      }
    </ul>
  );
};

export default memo(ListItem);