import './App.css';
import Count from "./pages/Count";
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
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Count />} />
        </Routes>
    </Router>
  );
}

export default App;

