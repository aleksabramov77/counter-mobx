import React, { useState } from 'react'
import { observer } from 'mobx-react'
import todo from './store/todo'

const Todo = observer(() => {

    const [newTodo, setNewTodo] = useState('New todo')

    return <div>
        <button onClick={() => {todo.fetchTodo()}}>Fetch todo</button>
        <br/>
        <input type='text' value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder='new todo'/>
        <button onClick={() => {
            todo.addTodo({ title: newTodo, completed: false })
        }}>
            Add Todo
        </button>
        {todo.todos.map(t => <div className='todo' key={t.id}>
                <input type='checkbox' checked={t.completed} onChange={() => {todo.completeTodo(t)}}/>
                {t.title}
                <button onClick={() => {todo.removeTodo(t.id)}}>x</button>
            </div>
        )}
    </div>
})

export default Todo