import React, {memo, useEffect, useRef, useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {addTodo} from "../features/sliceTodo";
import {useAddProductMutation} from "../features/api/apiSliceTodos";

//interface IFormProp{
//
//}
//FC<IFormProp>

const Form: React.FC = () => {
  const [addProduct] = useAddProductMutation()
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const clearInput = useRef<HTMLInputElement>(null)

  const onClickAddTodo = () => {
    if(value.trim()){
      addProduct({
        id: Date.now(),
        title: value,
        completed: false,
      })
    }
    setValue('')
  }

  const onClickClearInput = () => {
    setValue('')
    clearInput.current?.focus()
  }

  return (
    <div className="addTodo">

      <input
        ref={clearInput}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add to do"
      />
      <p
        onClick={() => onClickClearInput()}
      >
        X
      </p>
      <button
        // id="btnAdd"
        onClick={() => onClickAddTodo()}
      >
        +
      </button>
    </div>
  );
};

export default memo(Form);