import Header from "../component/Header";
import Editor from "../component/Editor";
import List from "../component/List";
import "./Todolist.css";

const Todolist = () => {
    return (
        <div className="Todolist">
            <Header />
            <Editor />
            <List />
        </div>

    );
};

export default Todolist;