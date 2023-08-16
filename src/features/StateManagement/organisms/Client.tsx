import CounterButtons from '../atoms/CounterButtons.tsx';
import CounterButtonsWithUseState from '../atoms/CounterButtonsWithUseState.tsx';
import CounterScore from '../atoms/CounterScore.tsx';
import { useState } from 'react';

function Client() {

    let [ countOfUseState, setCountOfUseState ] = useState<number>(0);
    let [ updateTimeOfUseState, setUpdateTimeOfUseState ] = useState<string>('-');

    let increment = (): void => {
        setCountOfUseState(countOfUseState + 1);
        setUpdateTimeOfUseState(new Date().toLocaleString("ja"));       
    };

    let decrement = (): void => {
        setCountOfUseState(countOfUseState - 1);
        setUpdateTimeOfUseState(new Date().toLocaleString("ja"));     
    };

    let reset = (): void => {
        if(countOfUseState !== 0){
            setCountOfUseState(0);
            setUpdateTimeOfUseState(new Date().toLocaleString("ja"));
        }
    };

    return (
        <div>
            <CounterScore count={countOfUseState} updateTime={updateTimeOfUseState} />
            <div>
                <h2>zustandを使うボタン</h2>
                <CounterButtons />
            </div>
            <div>
                <h2>useStateを使うボタン</h2>
                <CounterButtonsWithUseState
                    incrementFunc={increment}
                    decrementFunc={decrement}
                    resetFunc={reset} />
            </div>
        </div>
    );
}

export default Client;