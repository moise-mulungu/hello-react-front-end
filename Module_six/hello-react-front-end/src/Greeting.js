import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHelloDispatcher } from './redux/hello';

const HelloWorld = () => {
  const userDispatcher = useDispatch();
  const greeting = useSelector((state) => state.greetingReducer.greeting || '');

  const handleClick = () => {
    userDispatcher(getHelloDispatcher());
  };

  return (
    <div>
      <h1>
        Greeting :
        {greeting}
      </h1>
      <button type="submit" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default HelloWorld;
