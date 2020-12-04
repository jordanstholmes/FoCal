import * as React from 'react';
import { useState } from 'react';
import ConcreteTodo from '../models/ConcreteTodo';

interface TaskProps {
  todo: ConcreteTodo;
}

function Task({ todo }: TaskProps) {
  const [text, setText] = useState(todo.getText());
  const [done, setDone] = useState(todo.getDoneStatus());

  return (
    <div draggable onDrag={() => console.log('I am being dragged!')}>
      <span>*</span>
      <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
      <input type="textarea" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

export default Task;
