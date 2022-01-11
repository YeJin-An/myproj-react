import { createContext, useContext, useState, useReducer } from 'react';

const MessageContext = createContext('디폴트 값');

function reducer(prevcount, action) {
  const { type } = action;
  if (type === 'PLUS') return prevcount + 1;
  return prevcount;
}

function ContextApiSample() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>ConteextApiSample</h2>
      <button onClick={() => dispatch((prev) => prev + 1)}>+1 증가</button>
      <MessageContext.Provider value={{ count, dispatch }}>
        <Level1 />
      </MessageContext.Provider>
    </>
  );
}

function Level1() {
  return (
    <div>
      <h2>Level1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level2</h2>
      <Level3 />
    </div>
  );
}

function Level3() {
  return (
    <div>
      <h2>Level3</h2>
      <MessageContext.consumer>{({ count }) => count}</MessageContext.consumer>
      <Level4 />
    </div>
  );
}

function Level4() {
  const { count, dispatch } = useContext(MessageContext);
  return (
    <div>
      <h2>Level4</h2>
      {count}
      <button onClick={() => dispatch({ type: 'PLUS' })}></button>
    </div>
  );
}
export default ContextApiSample;
