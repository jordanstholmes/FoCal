import * as React from 'react';
import { useState } from 'react';
import Goal from './Goal';

function Todo({ description, isDone }: Goal) {
  const [text, setText] = useState(description);
  const [done, setDone] = useState(isDone);

  return (
    <div draggable onDrag={() => console.log('I am being dragged!')}>
      <span>*</span>
      <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
      <input type="textarea" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

export default Todo;
