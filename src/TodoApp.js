import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";



function TodoApp() {

  const {todos, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodo();  

  return (
    <>
      <h1>Todo App</h1>
      <hr/>
      <div className="container">
        <div className="row">
            <div className="col-7">
               <TodoList 
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
              <AddTodo onAddTodo={ handleAddTodo }/>
            </div>
        </div>
      </div>

    </>
  );
}

export default TodoApp;
