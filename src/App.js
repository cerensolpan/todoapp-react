import { useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [index, setIndex] = useState(1);

  const addTodo = () => {
    let arr = todoList
    arr.push({ index: index, todo: todoInput });
    setIndex(index + 1);
    setTodoList(arr);
    setTodoInput("");
  }
  const deleteTodoCallback = (index) => {
    let deletedArr = todoList.filter((todo) => todo.index !== index );
    setTodoList(deletedArr);
  }
 
  return (
    <div className="flex flex-col bg-blue-100 justify-center items-center w-full min-h-screen">
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  flex flex-col items-end '>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={todoInput}
            onChange={(e) => { setTodoInput(e.target.value) }} /><hr />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2' type='button' onClick={addTodo} >Add</button>
        </form>
      </div>
      <hr />
      <div className=' flex flex-col'>
        {todoList.map(todo => { return <Todo key={todo.index} todo={todo} deleteTodo={deleteTodoCallback}/> })}
      </div>
    </div>
  );
}

export default App;
