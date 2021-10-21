import React from 'react'
import { observer } from 'mobx-react'
import counter from './store/counter'

// с помощью функции observe и функциональной компоненты компоненты
const Counter = observer(() => {
    return (
            <div className="Counter">
                {counter.total}
                <h1>{counter.count}</h1>
                <button onClick={() => { counter.decrement() }}>-1</button>
                <button onClick={() => counter.increment()}>+1</button>
            </div>
        )
    }
)

/*
// с помощью функции observe и классовой компоненты
const Counter = observer( class extends React.Component {
    render () {
        return (
            <div className="Counter">
                <h1>{counter.count}</h1>
                <button onClick={() => { counter.decrement() }}>-1</button>
                <button onClick={() => counter.increment()}>+1</button>
            </div>
        )
    }
})
*/

/*
// с помощью декоратора observe и классовой компоненты
@observer       // декоратор "установить наблюдение за компонентой". Если её состояние(state) меняется, то перерисовать её.
class Counter extends React.Component {
    render () {
        return (
            <div className="Counter">
                <h1>{counter.count}</h1>
                <button onClick={() => { counter.decrement() }}>-1</button>
                <button onClick={() => counter.increment()}>+1</button>
            </div>
        )
    }
}
*/

export default Counter