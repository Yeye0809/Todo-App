import TodoItem from "./TodoItem"

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {

  return (
    <ul className="list-group">
       <TodoItem 
          todos={todos} 
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}/>
    </ul>         
  )
}

export default TodoList
