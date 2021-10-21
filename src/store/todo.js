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

    fetchTodo () {
        let  nextId = this.todos.reduce((prev, current) => +prev.id > +current.id ? prev : current).id + 1
        fetch(`https://jsonplaceholder.typicode.com/todos/` + nextId)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos.push({ id:json.id, title: json.title, completed: json.completed })
            })
    }
}

export default new Todo()    // вернуть по умолчанию объект класса Todo