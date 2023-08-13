import CounterButtons from '../atoms/CounterButtons.tsx';
import useCounterStore from '../stores/counterStore';

function Client() {
    let count = useCounterStore((state) => state.count);
    let updateTime = useCounterStore((state) => state.updateTime);
    return (
        <div>
            <div>
                <h2>zustandを使う場合</h2>
                {count}
                <CounterButtons />
                <div>Last Updated:{updateTime}</div>
            </div>
            <div>
                <h2>useStateを使う場合</h2>
            </div>
        </div>
    );
}

export default Client;