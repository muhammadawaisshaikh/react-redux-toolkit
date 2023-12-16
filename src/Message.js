import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update, remove } from './slices/messageSlice';

export function Message() {
  const message = useSelector((state) => state.message.value);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    let value = e.target.value;
    dispatch(update(e.target.value));
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h1>Message State</h1>

      <input placeholder="message" onChange={(e) => onHandleChange(e)} />

      <p>{message}</p>
    </div>
  );
}
