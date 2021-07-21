import React, { useState } from 'react';

// HOOK -> sebuah function yang menghubungkan fitur react dengan dunia luar
// KONTEKS FITUR -> STATE
//
// HOOK punya signature -> 'use[Blablabla]'

const FuncTodoItem = (props) => {
  const [clickCounter, setClickCounter] = useState(0); // return an array -> [valueState, setValueState]

  const onTodoItemClick = () => {
    props.onClick(props.title, props.status, props.desc);

    setClickCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div onClick={onTodoItemClick}>
      <p>{props.title}</p>
      <p>{props.status}</p>
      <p>{props.desc}</p>
      <p>Clicked {clickCounter} times.</p>
      <hr />
    </div>
  );
};

export default FuncTodoItem;
