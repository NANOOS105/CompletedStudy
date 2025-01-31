const Button = ({ text, color = "black" ,children}) => {
    return(
        <button style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;
