import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

import Goal from './Goal';
import GoalList from './GoalList';
import TodoList from './TodoList';



function App({ todos }: GoalList) {
  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  )
}

const list: Goal[] = [
  { description: 'This is a todo item', isDone: true },
  { description: '', isDone: false },
  { description: 'Another todo', isDone: false },
];

ReactDOM.render(<TodoList todos={list} />, document.getElementById('app'));
