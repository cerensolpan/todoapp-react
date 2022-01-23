import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, deleteTodo, completedTodo, testSubmit }) => {
    let deleteItem = () => {
        if (testSubmit) {
            testSubmit();
          } else {
        deleteTodo(todo.index)}
    }

    let completeItem = () => {
        if (testSubmit) {
            testSubmit();
          } else {
            completedTodo(todo.index)}
    }
    return (
        <div className='my-1 flex items-center justify-between'>
            <span className={todo.status?'line-through': ''}>{todo.todo}</span>
            <div>
                <button 
                    className='bg-teal-200 hover:bg-teal-400 text-white font-bold py-1 px-2 rounded-full mr-2'
                    data-testid="todo-completed"
                    onClick={()=>{completeItem()}}
                ><FontAwesomeIcon icon={faCheckCircle} /></button>
                <button 
                    className='bg-rose-200 hover:bg-rose-400 text-white font-bold py-1 px-2 rounded-full'
                    data-testid="todo-deleted"
                    onClick={()=>{deleteItem()}}
                ><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}

export default Todo