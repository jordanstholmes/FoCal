import Todo from './Todo';

class AbstractTodo {
  protected todos: Todo[];
  protected isDone: boolean;

  constructor(todos: Todo[] = []) {
    this.todos = todos;
    this.isDone = false;
  }

  setDone(isDone: boolean): void {
    this.isDone = isDone;
  }

  getDoneStatus(): boolean {
    return this.isDone;
  }

  setAllDone(isDone: boolean): void {
    this.todos.forEach((todo: Todo) => todo.setAllDone(isDone));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}



export default AbstractTodo;