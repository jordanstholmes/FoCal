import * as React from 'react';

// import Goal from '../Goal';
// import GoalList from '../GoalList';
import ConcreteTodo from '../models/ConcreteTodo';
import Task from './Task';

interface TodoListProps {
  todos: ConcreteTodo[],
}

function TodoList({ todos }: TodoListProps) {
  return (
    <div onDragOver={(e) => e.preventDefault()} >
      {todos.map((todo: ConcreteTodo) => <Task todo={todo} />)}
    </div>
  );
}

export default TodoList;
