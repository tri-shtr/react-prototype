type propsType = {
    incrementFunc: () => void,
    decrementFunc: () => void,
    resetFunc: () => void
};

export default function CounterButtonsWithUseState(props: propsType) {
    return (
        <div>
            <button onClick={() => props.incrementFunc()}>increment</button>
            <button onClick={() => props.decrementFunc()}>decrement</button>
            <button onClick={() => props.resetFunc()}>reset</button>
        </div>
    )    
}