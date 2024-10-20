import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieCategoryPage from "./pages/MovieCategoryPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryId" element={<MovieCategoryPage />} />
            </Routes>
        </>
    );
}

export default App;
