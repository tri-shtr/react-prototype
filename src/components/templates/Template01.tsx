import './Template01.css';
import '../common.css';

function Template01(props:any) {
  return (
    <>
        <div className="header">
            {props.header}
        </div>
        <div className="client">
            {props.client}
        </div>
        <div className="footer">
            {props.footer}
        </div>
    </>
    );
}

export default Template01;