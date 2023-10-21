import useCounterStore from "../stores/counterStore";
type propsType = {
    count: number,
    updateTime: string
};

export default function CounterScore(props: propsType) {
    let countOfZustand = useCounterStore((state) => state.count);
    let updateTimeOfZustand = useCounterStore((state) => state.updateTime);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>方式</th><th>カウント</th><th>最終更新時刻</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>zustand</td><td>{countOfZustand}</td><td>{updateTimeOfZustand}</td>
                    </tr>
                    <tr>
                        <td>useState</td><td>{props.count}</td><td>{props.updateTime}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}