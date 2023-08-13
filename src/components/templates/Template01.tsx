import './Template01.css';

function Template01(props:any) {
  return (
    <div className="parent">
        <div className="header">
            {props.header}
        </div>
        <div className="client">
            {props.client}
        </div>
        <div className="footer">
            {props.footer}
        </div>
    </div>
    );
}

export default Template01;