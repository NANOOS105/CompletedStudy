import "./Button.css";

const Button = ({text, type, onClick}) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`Button Button_${type}`}>
                {text}
            </button>
        </div>
    );
};

export default Button;