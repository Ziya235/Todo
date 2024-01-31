import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            setError("Input cannot be empty");
            return;
        }

        addTodo(value);
        setValue("");
        setError("");
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type='text'
                className='todo-input'
                placeholder='Enter something'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}
