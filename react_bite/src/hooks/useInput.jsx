import {useState} from "react";

function useInput(){
    const [input, setInput] = useState();//외부에서는 호출할 수 없음
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input,onChange];
}

export default useInput;