import { makeAutoObservable } from 'mobx'

class Counter {
    count = 0

    constructor () {
        makeAutoObservable(this)
    }

    decrement () {
        this.count = this.count -1
        console.log('decrement ', this.count)
    }
    increment () {
        this.count = this.count +1
        console.log('increment ', this.count)
    }
}

export default new Counter()