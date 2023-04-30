import { useEffect, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";

const initilaState = [];

const initTodo = () => {

    const oldTodo = JSON.parse( localStorage.getItem('todos'));

    return oldTodo
}

const useTodo = () => {

  const [todos, dispatch] = useReducer(TodoReducer, initilaState, initTodo );

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newValue) => {

    const newTodo = {
      id: new Date().getTime(),
      description: newValue,
      done: false
    }

    const action = {
      type: '[TODO] Add Todo',
      payload: newTodo,
    }

    dispatch(action);

  }

  const handleDeleteTodo = (id) => {
    console.log({id: id})
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    console.log(id);
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
    })
  }


  return{
    todos,

    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo

  }

}

export default useTodo
