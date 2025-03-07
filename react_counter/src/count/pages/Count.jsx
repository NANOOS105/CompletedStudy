import Viewer from "../component/Viewer";
import Even from "../component/Even";
import Controller from "../component/Controller";
import {useEffect, useRef, useState} from "react";
import './Count.css';

const Count = () => {
    const isMount = useRef(false);
    const [count,setCount] = useState(0);
    const [input,setInput] = useState("");

    //1. 마운드 : 탄생
    useEffect(() => {
        console.log("mount")
    }, []);

    //2. 업데이트 : 변화,리렌더링
    useEffect(() => {
        //진짜 업데이트 될때만 로그 찍히도록 하는 코드
        if(!isMount.current){
            isMount.current=true;
            return;
        }
        console.log("update");
    });
    //3. 언마운트 : 죽음ㅁ
    const onClickButton = (value) =>{
        setCount(count +value);
    };

    return (
        <div>
            <h1>Simple Counter</h1>

            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value)
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    );
};

export default Count;