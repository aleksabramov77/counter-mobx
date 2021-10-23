import { makeAutoObservable, runInAction } from 'mobx'

class Todo {
    todos = [
        { id: 1, title: 'Сходить в магазин', completed: false },
        { id: 2, title: 'Посмотреть кино', completed: true },
        { id: 3, title: 'Сходить на улицу', completed: false },
    ]

    get nextId () {
        return this.todos.reduce((prev, current) => +prev.id > +current.id ? prev : current).id + 1
    }

    constructor () {
        makeAutoObservable(this)    // сделать объекты этого класса автоматически отслеживаемыми
    }

    // This method will be wrapped into `action` automatically by `makeAutoObservable`
    addTodo (todo) {              // аналог action в редакс
        console.log('addTodo ', todo, this.nextId)
        this.todos.push({
            ...todo,
            id: this.nextId
        })
    }

    removeTodo (id) {              // аналог action в редакс
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    // This method will be wrapped into `action` automatically by `makeAutoObservable`
    completeTodo (todo) {
        todo.completed = !todo.completed
    }

    fetchTodo () {
        fetch(`https://jsonplaceholder.typicode.com/todos/` + this.nextId)
            .then(response => response.json())
            .then(json => {
                // since my fetchTodo function is async then I need to use runInAction inside
                runInAction(() => {
                    this.todos.push({ id: json.id, title: json.title, completed: json.completed })
                })
            })
    }
}

export default new Todo()    // вернуть по умолчанию объект класса Todo