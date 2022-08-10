import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHelloDispatcher } from './redux/greet';

const HelloWorld = () => {
  const userDispatcher = useDispatch();
  const greeting = useSelector((state) => state.helloReducer.greeting || '');

  const handleClick = () => {
    userDispatcher(getHelloDispatcher());
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button type="submit" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default HelloWorld;
