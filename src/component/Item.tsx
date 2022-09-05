import React, {memo, useRef} from 'react';
import {useAppDispatch} from "../app/hooks";
import {completedTodo, removeTodo, renameTodo} from "../features/sliceTodo";
import {
  useCompletedProductMutation,
  useRemoveProductMutation,
  useRenameProductMutation
} from "../features/api/apiSliceTodos";

interface IItemProp {
  title: string;
  index: number;
  id: number;
  completed: boolean
}

const Item: React.FC<IItemProp> = ({title, index, id, completed}) => {
  const [removeProduct] = useRemoveProductMutation()
  const [completedProduct] = useCompletedProductMutation()
  const [renameProduct] = useRenameProductMutation()

  const date = new Date

  const onClickRemoveTodo = (id: number) => {
    removeProduct(id)
  }
  const onClickCompletedTodo = (id: number) => {
    completedProduct({
      title,
      id: id,
      completed: !completed
    })
  }
  const onClickRenameTodo = (id: number) => {
    const newText = prompt() || ''
    renameProduct({id:id,title:newText,completed:completed})
  }
  return (
    <li className={completed ? 'checked' : ''}
    >

      <div className="left">
        <div className='line'>
          <p className='counter'></p>
          <p>{title}</p>
          <b>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</b>
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => onClickRenameTodo(id)}
        >Rename
        </button>
        <button
          onClick={() => onClickCompletedTodo(id)}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#E8E8E8"/>
            <rect x="11.7418" y="21.3969" width="4" height="12.2744" rx="2"
                  transform="rotate(-40.8464 11.7418 21.3969)"
                  fill="#097928"/>
            <rect x="26.5342" y="10.3166" width="4" height="20" rx="2" transform="rotate(26.7027 26.5342 10.3166)"
                  fill="#097928"/>
          </svg>
        </button>
        <button
          onClick={() => onClickRemoveTodo(id)}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#E8E8E8"/>
            <rect x="25.6569" y="11.5147" width="4" height="20" rx="2" transform="rotate(45 25.6569 11.5147)"
                  fill="#CD0F0F"/>
            <rect x="11.5147" y="14.3431" width="4" height="20" rx="2" transform="rotate(-45 11.5147 14.3431)"
                  fill="#CD0F0F"/>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default memo(Item);