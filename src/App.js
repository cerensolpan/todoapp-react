import { useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [index, setIndex] = useState(1);

  const addTodo = () => {
    let arr = todoList
    arr.push({ index: index, todo: todoInput, status: false });
    setIndex(index + 1);
    setTodoList(arr);
    setTodoInput("");
  }
  const deleteTodoCallback = (index) => {
    let deletedArr = todoList.filter((todo) => todo.index !== index );
    setTodoList(deletedArr);
  }

  const completedTodo = (index) => {
    let arr=todoList;
    arr.map((todo)=> {
      if(todo.index===index) todo.status=!todo.status
    });
    setTodoList([...arr]);
  }
 
  return (
    <div className="flex flex-col bg-blue-100 justify-center items-center w-full min-h-screen">
      <div className='w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col '>
        <h1 className='text-center text-lg font-semibold mb-2'>Todo List</h1>
        <form className='flex flex-col items-end'>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={todoInput}
            onChange={(e) => { setTodoInput(e.target.value) }} /><hr />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-4' data-testid='todo-button' type='button' onClick={addTodo} >Add</button>
        </form>
        <div data-testid='todo-list'>
          {todoList.map(todo => { return <Todo key={todo.index} todo={todo} deleteTodo={deleteTodoCallback} completedTodo={completedTodo}/> })}
        </div>
      </div>

    </div>
  );
}

export default App;
