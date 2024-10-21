import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName" element={<MovieListPage />} />
            </Routes>
        </>
    );
}

export default App;
