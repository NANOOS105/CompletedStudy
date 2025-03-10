import Header from "../component/Header";
import Editor from "../component/Editor";
import List from "../component/List";
import "./Todolist.css";
import {useRef, useReducer, useCallback, createContext, useMemo} from "react";

const mockData=[
    {
        id: 0,
        isDone : false,
        content : "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone : false,
        content : "Java 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone : false,
        content : "빨래하기",
        date: new Date().getTime(),
    },
];

function reducer(state,action){
    switch (action.type){
        case "CREATE": return [action.data, ...state];
        case "UPDATE":
            return state.map((item)=>
                item.id === action.targetId?
                {...item, isDone: !item.isDone}
                    : item
            );
        case "DELETE":
            return state.filter((item)=>item.id !== action.targetId);
        default: return state;
    }
}

export const TodosStateContext = createContext();
export const TodosDispatchContext = createContext();

const Todolist = () => {

    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type:"CREATE",
            data:{
                id:idRef.current ++,
                isDone:false,
                content: content,
                date: new Date().getTime(),
            }
        });
    },[]);

    const onUpdate = useCallback((targetId) => {
        // todos State의 값들 중에
        // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

        // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
        dispatch({
            type:"UPDATE",
            targetId:targetId,
        });
    },[]);

    const onDelete= useCallback((targetId) => {
        dispatch({
            type:"DELETE",
            targetId: targetId,
        });

    }, []);

    const memoizedDispatch = useMemo(() => {
        return {
            onCreate,
            onDelete,
            onUpdate};
    },[]);

    return (
        <div className="App">
            <Header />
            <TodosStateContext.Provider value={todos}>
                <TodosDispatchContext.Provider value={memoizedDispatch}>
                    <Editor />
                    <List />
                </TodosDispatchContext.Provider>
            </TodosStateContext.Provider>
        </div>
    );
};

export default Todolist;