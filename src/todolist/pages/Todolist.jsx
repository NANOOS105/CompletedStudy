import Header from "../component/Header";
import Editor from "../component/Editor";
import List from "../component/List";
import "./Todolist.css";
import {useState} from "react";
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

const Todolist = () => {
    const [todos,setTodos] = useState(mockData);
    return (
        <div className="Todolist">
            <Header />
            <Editor />
            <List />
        </div>

    );
};

export default Todolist;