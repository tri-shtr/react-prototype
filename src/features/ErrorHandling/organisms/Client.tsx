import { useErrorBoundary } from 'react-error-boundary';

export default function Client() {

    let { showBoundary } = useErrorBoundary();

    let throwError = (): void => {
        try {
            throw new Error("エラー処理のページで発生させたエラー");
        }catch(error: any) {
            console.log(error);
            showBoundary(error);
        }

    };

    return (
        <div>
            <h2>Error Handling</h2>
            <button onClick={throwError}>エラーを発生させる</button>
        </div>
    );
};
