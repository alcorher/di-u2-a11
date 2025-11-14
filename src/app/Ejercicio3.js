import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Comprar leche', done: true },
  { id: 1, title: 'Comer tacos', done: false },
  { id: 2, title: 'Preparar té', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    const newTodo = {
      id: nextId++,
      title,
      done: false
    };
    setTodos(prev => [...prev, newTodo]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(prev =>
      prev.map(t => (t.id === nextTodo.id ? { ...t, ...nextTodo } : t))
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(prev => prev.filter(t => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
