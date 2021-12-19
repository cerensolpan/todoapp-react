import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, deleteTodo }) => {
    return (
        <div className='my-1'>
            <span>{todo.todo}</span>
            <button 
                className='bg-red-200 hover:bg-red-400 text-white font-bold py-2 px-3 rounded mx-2'
                onClick={()=>deleteTodo(todo.index)}
            ><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
}

export default Todo