import * as React from 'react';

import Goal from './Goal';
import GoalList from './GoalList';
import Todo from './Todo';


function TodoList({ todos }: GoalList) {
  return (
    <div onDragOver={(e) => e.preventDefault()} >
      {todos.map((todo: Goal) => <Todo description={todo.description} isDone={todo.isDone} />)}
    </div>
  );
}

export default TodoList;
