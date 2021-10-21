import { makeAutoObservable } from 'mobx'

class Todo {
    todos = [
        { id: 1, title: 'Сходить в магазин', completed: false },
        { id: 2, title: 'Посмотреть кино', completed: true },
        { id: 3, title: 'Сходить на улицу', completed: false },
    ]

    constructor () {
        makeAutoObservable(this)    // сделать объекты этого класса автоматически отслеживаемыми
    }

    addTodo (todo) {              // аналог action в редакс
        this.todos.push(todo)
    }

    removeTodo (id) {              // аналог action в редакс
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo (todo) {
        todo.completed = !todo.completed
    }
    // completeTodo (id) {
    //     this.todos = this.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t )
    // }
}

export default new Todo()    // вернуть по умолчанию объект класса Todo