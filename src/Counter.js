import React from 'react'
import counter from './store/counter'
import { observer } from 'mobx-react'

const Counter = observer(() => {

    return (
        <div className="Counter">
            <h1>{counter.count}</h1>
            <button onClick={() => { counter.decrement() }}>-1</button>
            <button onClick={() => counter.increment()}>+1</button>
        </div>
    )

})

export default Counter