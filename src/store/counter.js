import { makeAutoObservable } from 'mobx'

class Counter {
    count = 0
    timer = 60 // для демонстрации computed свойства

    constructor () {
        makeAutoObservable(this)    // сделать объекты этого класса автоматически отслеживаемыми
    }

    decrement () {              // аналог action в редакс
        this.count --
        console.log('decrement ', this.count)
    }
    increment () {              // аналог action в редакс
        this.count ++
        console.log('increment ', this.count)
    }

    get total() {
        return `Count + Timer = ` + this.count + this.timer
    }
}

export default new Counter()    // вернуть по умолчанию объект класса Counter