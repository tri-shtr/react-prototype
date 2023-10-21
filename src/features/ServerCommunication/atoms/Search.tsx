import { query } from '../api/useProduct';

export default function Search(){
    
    // 検索ボタン押下時の処理
    // https://zenn.dev/someone7140/articles/8a35b8a052f698
    const { refetch } = query();
    const handleClick = () => {
        refetch();
    }

    return (
        <>
            <button onClick={handleClick}>商品を検索</button>
        </>
    )
}