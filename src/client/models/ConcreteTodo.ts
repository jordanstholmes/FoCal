import AbstractTodo from './AbstractTodo';

class ConcreteTodo extends AbstractTodo {
  protected text: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): string {
    this.text = text;
    return this.text;
  }
}

export default ConcreteTodo;