import useInput from "../hooks/useInput";

//3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 푹 내부에서만 호출 가능
//2. 조건부로 호출될 수는 없다.(조건문,반복문 안에서 사용 불가)
//3. 나만의 훅(Custom Hook) 직접 만들 수 있음 > 앞에 use를 붙이면 됨

const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    return(
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </div>
    );
};

export default HookExam;