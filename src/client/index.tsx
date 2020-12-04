import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

// import Goal from './Goal';
// import GoalList from './GoalList';
import Todo from './models/Todo';
import ConcreteTodo from './models/ConcreteTodo';
import TodoList from './components/TodoList';

const list = [
  new ConcreteTodo('Different'),
  new ConcreteTodo(''),
  new ConcreteTodo('Another todo!'),
];

interface AppProps {
  todos: ConcreteTodo[];
}

function App({ todos }: AppProps) {
  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props: AppProps) {
//     super(props);
//     // this.state = {
//     //   todos: props.todos,
//     // };
//   }

//   render() {
//     const { todos } = this.props.todos;
//     return (
//       <div>
//         <TodoList todos={todos}/>
//       </div>
//     );
//   }
// }

ReactDOM.render(<TodoList todos={list} />, document.getElementById('app'));
