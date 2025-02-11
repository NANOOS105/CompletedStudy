import './App.css';
import Count from "./count/pages/Count";
import Todolist from "./todolist/pages/Todolist";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Home = () => {
    return <h1>홈 페이지입니다!</h1>;
};

function App() {

  return  (
    <Router>
        <nav>
            <Link to="/">홈</Link> |
            <Link to="/counter">Counter</Link>
            <Link to="/todolist">Todolist</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Count />} />
            <Route path="/todolist" element={<Todolist />} />
        </Routes>
    </Router>
  );
}

export default App;

