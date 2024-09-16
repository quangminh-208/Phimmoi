import { React, useState, useEffect } from "react";
import { API_BASE_URL, MOVIES_LIMIT } from "../constants.js";
import { getMoviesData } from "../services/movieAPI.js";

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(
            <span key={i} className={i <= rating ? "star filled" : "star"}>
                &#9733;
            </span>
        );
    }

    return <div className="movie-rating-stars">{stars}</div>;
};

function TopMovieList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const data = await getMoviesData(url);
            setMovies(data);
        };

        fetchData(`${API_BASE_URL}/api/movies?page=1&limit=${MOVIES_LIMIT}`);
    }, []);

    return (
        <>
            <div className="top-movie-list">
                <div className="row top-movie-list-title">
                    <h1 className="col-12">⭐ {props.title}</h1>
                </div>
                <ul className="row movie-list">
                    {movies.map((movie, index) => (
                        <li key={index} className="col-12 movie-item-wrapper">
                            <a className="row movie-item">
                                <div className="col-3 movie-thumbnail">
                                    <img src={movie.image} alt={movie.title} className="movie-thumbnail-img" />
                                </div>
                                <div className="col movie-info">
                                    <p className="movie-main-title">{movie.vnTitle}</p>
                                    <p className="movie-sub-title">{movie.enTitle}</p>
                                    <p className="movie-views">{movie.views} lượt xem</p>
                                    {renderStars(movie.rate)}
                                </div>
                                <div className="col-3 movie-status">
                                    <span>{movie.status}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TopMovieList;
