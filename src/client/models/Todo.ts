interface Todo {
  todos: Todo[];
  isDone: boolean;
  setDone: (isDone: boolean) => void;
  setAllDone: (isDone: boolean) => void;
  getTodos: () => Todo[];
  addTodo: (todo: Todo) => Todo;
}

export default Todo;