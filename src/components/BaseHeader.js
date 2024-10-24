import { React, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import categories from "../config/categories.json";
import countries from "../config/countries.json";
import { searchMovies } from "../services/movieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                                <Link
                                    to="/"
                                    aria-current="page"
                                    className="navbar-brand"
                                    title="Vietsub | Phim Hay | Xem Phim HD Online Vietsub Miễn Phí"
                                >
                                    {/* <img src="https://vietsubmoi.online/_ipx/f_webp/image/logo.png" alt="Vietsubmoi" width="80" height="40" /> */}
                                    <FontAwesomeIcon icon="fa-solid fa-film" className="fs-1 text-white text-center"/>
                                </Link>
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
                                                <Link to="/" className="search-movie">
                                                    <span className="movie-main-title">{movie.vnTitle} </span>
                                                    <span className="movie-sub-title">{movie.enTitle}</span>
                                                </Link>
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
                                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Thể loại
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.map((category) => (
                                        <li key={category.id}>
                                            <Link to={`/category/${category.slug}`} className="dropdown-item">
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Quốc gia
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {countries.map((country) => (
                                        <li key={country.id}>
                                            <Link to="/" className="dropdown-item">
                                                {country.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Anime
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Phim lẻ mới nhất
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Phim bộ mới nhất
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
