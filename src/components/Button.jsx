const Button = ({ text, color = "black" ,children}) => {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(text);
        console.log(e);
    };

    return(
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;

//합성 이벤트(통일된 규칙) => 브라우저의 종류에 상관이 없게끔