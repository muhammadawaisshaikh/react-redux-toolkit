import React from 'react';
import './style.css';
import { Counter } from './Counter';
import { Message } from './Message';

export default function App() {
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <p>Start editing to see some magic happen :)</p>

      <Counter />
      <Message />
    </div>
  );
}
