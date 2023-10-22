import { Link } from 'react-router-dom';

function Menu(props:any) {
    return (
        <div>
            {props.ScreenName}
            |
            <Link to="/page01">Page01</Link>
            |
            <Link to="/page02">画像の表示</Link>
            |
            <Link to="/StateManagement">状態管理</Link>
            |
            <Link to="/Form">フォーム</Link>
            |
            <Link to="/ServerCommunication">サーバー通信</Link>
            |
            <Link to="/ErrorHandling">エラー処理</Link>
        </div>
    )
}
export default Menu;