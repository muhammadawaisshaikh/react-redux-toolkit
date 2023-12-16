import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './slices/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '30px' }}>
      <h1>Counter State</h1>

      <button
        style={{ border: 0, padding: '5px 10px' }}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <span style={{ margin: '0 30px' }}>{count}</span>

      <button
        style={{ border: 0, padding: '5px 10px' }}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
