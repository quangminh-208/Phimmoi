import { React, useEffect, useRef, useState } from "react";
import categories from "../config/categories.json";
import countries from "../config/countries.json";
import { searchMovies } from "../services/movieService";

export default function BaseHeader() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const searchResultBox = useRef(null);

    const handleClickOutside = (event) => {
        if (searchResultBox.current && !searchResultBox.current.contains(event.target)) {
            setIsShowSearchResult(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const searchMovie = async (searchText) => {
            if (searchText === "") {
                setIsShowSearchResult(false);
                return;
            }
            setIsShowSearchResult(true);
            const data = await searchMovies(searchText);
            setMovies(data);
        };

        searchMovie(searchText);
    }, [searchText]);

    return (
        <>
            <div id="header">
                <div className="header-main">
                    <div className="container ">
                        <div className="row d-flex justify-content-between">
                            <div className="header-logo col-4">
                                <a
                                    aria-current="page"
                                    className="navbar-brand"
                                    href="/"
                                    title="Vietsub | Phim Hay | Xem Phim HD Online Vietsub Miễn Phí"
                                >
                                    <img src="https://vietsubmoi.online/_ipx/f_webp/image/logo.png" alt="Vietsubmoi" width="80" height="40" />
                                </a>
                            </div>
                            <div className="header-search-form col-4">
                                <form method="GET" id="form-search-movie">
                                    <input
                                        className="search-box w-100"
                                        type="text"
                                        placeholder="Tìm kiếm..."
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        onClick={() => setIsShowSearchResult(true)}
                                    />
                                </form>
                                {isShowSearchResult && (
                                    <ul ref={searchResultBox} className="header-search-result">
                                        {movies.map((movie) => (
                                            <li key={movie.id} className="search-result-item">
                                                <a href="" className="search-movie">
                                                    <span className="movie-main-title">{movie.vnTitle} </span>
                                                    <span className="movie-sub-title">{movie.enTitle}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>

                <div className="header-menu">
                    <div className="container">
                        <ul className="navbar-nav d-flex flex-row justify-content-around">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
                                    Thể loại
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <a className="dropdown-item" href="/">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
                                    Quốc gia
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {countries.map((country) => (
                                        <li key={country.id}>
                                            <a className="dropdown-item" href="/">
                                                {country.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Anime
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Phim mới nhất
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Phim mới nhất
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
