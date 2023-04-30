import React, { useReducer, useState } from 'react';

const AddTodo = ({onAddTodo}) => {

    const [formValue, setFormValue ] = useState('');

    const onInputChange = ({target}) => {
        const newIValue = target.value;

        setFormValue( newIValue );

    }

    const onSubmit = (event) => {
        event.preventDefault();

        onAddTodo(formValue);

        setFormValue('');
    }

  return (
    <form onSubmit={ onSubmit } autoComplete='off'>
      <input
        className='form-control'
        type='text'
        placeholder='¿Qué quieres hacer?'
        value={ formValue }
        name='formVaalue'
        onChange={ onInputChange }
      />

      <button className='btn btn-primary mt-2' type="submit">Add</button>
    </form>
  )
}

export default AddTodo
