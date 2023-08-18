
function Menu(props:any) {
    return (
        <div>
            {props.ScreenName}
            |
            <a href="/page01">Page01</a>
            |
            <a href="/page02">Page02</a>
            |
            <a href="/StateManagement">状態管理</a>
            |
            <a href="/Form">フォーム</a>
            |
            <a href="/ServerCommunication">サーバー通信</a>
        </div>
    )
}

export default Menu;