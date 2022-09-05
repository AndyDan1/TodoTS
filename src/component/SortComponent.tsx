import React, {memo, useState} from 'react';
import classes from '../styles.module.scss';
import {useAppSelector} from "../app/hooks";
import {Item} from "../features/sliceTodo/todoState";
import {useGetTodosQuery} from "../features/api/apiSliceTodos";

interface ISortComponentProp {
  sortValue: number;
  setSortValue: (i: number) => void;
}

const SortComponent: React.FC<ISortComponentProp> = ({sortValue, setSortValue}) => {
  const {data:todos=[]} = useGetTodosQuery('')
  const categories = ['all', 'done', 'todo']
  const onClickCategories = (i: number) => {
    setSortValue(i)
  }
  return (
    <div className="sortTodo">
      <div className="left">
        <p>todo: <span>{todos.length}</span></p>
        <p>done : <span>{
          todos.reduce((acc: number, item: Item) => acc += Number(item.completed), 0)
        }</span></p>
      </div>
      <div className="right">
        {categories.map((item, index) => (
          <button
            key={item}
            onClick={() => onClickCategories(index)}
            className={sortValue === index ? 'active' : ''}
            disabled={sortValue === index}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(SortComponent);