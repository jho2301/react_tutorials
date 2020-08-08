import React, {useState, useRef, useCallback} from 'react';
// import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate'
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList'

const createBulkTodos = () => {
  const arr = [];
  for (let i = 1; i < 10000; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return (arr);
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos => [...todos, todo]);
      nextId.current += 1
    },
    []
  )
  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    },
    []
  )
  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map( todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      ))
    },
    []
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
