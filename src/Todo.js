import React from 'react'
import { observer } from 'mobx-react'
import todo from './store/todo'

const Todo = observer(() => {
    return (
        <div>
            {todo.todos.map(t => (
                <div className='todo' key={t.id}>
                    <input type='checkbox' checked={t.completed} onChange={()=>{todo.completeTodo(t)}}/>
                    {t.title}
                    <button onClick={()=>{todo.removeTodo(t.id)}}>x</button>
 {/*<input name='newTodo' type='text' placeholder='new todo'} />
                    <input name='newTodo' type='submit' onClick={()=>{todo.addTodo({id:4, title:})}}/>*/}
{/*                    <span>{'ID: ' + t.id}</span>
                    <span>{'title: ' + t.title}</span>
                    <span>{'completed: ' + (t.completed ? 'yes' : 'no')}</span>*/}
                </div>)
            )}
        </div>
    )
})

export default Todo