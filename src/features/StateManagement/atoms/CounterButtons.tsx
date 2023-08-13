
import useCounterStore from '../stores/counterStore.ts'

function CounterButtons() {
    
    let increment = useCounterStore((state) => state.increment)
    let decrement = useCounterStore((state) => state.decrement)
    let reset = useCounterStore((state) => state.reset)
    return (
        <div>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    )
}

export default CounterButtons;