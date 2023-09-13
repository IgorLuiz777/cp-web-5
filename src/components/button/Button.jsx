
import './button.css'

const Button = (props) => {
    return (
        <div className="button">
            <a href={props.href}>{props.children}</a>
        </div>
    );
}

export default Button;
