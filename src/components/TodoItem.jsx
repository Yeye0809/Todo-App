
const TodoItem = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <>
        {
            todos.map( todo =>(
                <li 
                    className="list-group-item d-flex justify-content-between" 
                    key={ todo.id }
                >
                    <span 
                        className={`align-self-center ${ todo.done && 'text-decoration-line-through'}`}
                        onDoubleClick={() => onToggleTodo(todo.id)}
                    >
                        { todo.description }
                    </span>

                    <button 
                        className="btn btn-danger"
                       onClick={ () => onDeleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))
        }
    </>
  )
}

export default TodoItem
