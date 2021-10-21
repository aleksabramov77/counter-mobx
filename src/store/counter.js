import { makeAutoObservable } from 'mobx'

class Counter {
    count = 0

    constructor () {
        makeAutoObservable(this)    // сделать объекты этого класса автоматически отслеживаемыми
    }

    decrement () {              // аналог action в редакс
        this.count = this.count -1
        console.log('decrement ', this.count)
    }
    increment () {              // аналог action в редакс
        this.count = this.count +1
        console.log('increment ', this.count)
    }
}

export default new Counter()    // вернуть по умолчанию объект класса Counter