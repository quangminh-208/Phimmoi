import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL, MOVIES_LIMIT } from "../constants.js";
import { getMoviesData } from "../services/movieAPI.js";

function MovieList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const data = await getMoviesData(url);
            setMovies(data);
        };

        fetchData(`${BASE_URL}/api/movies?page=1&limit=${MOVIES_LIMIT}&order=view:desc`);
    }, []);

    return (
        <>
            <div className="movie-list-wrapper">
                <div className="row mb-3 movie-list-title">
                    <div className="col">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="col d-flex">
                        <a href="" className="my-auto ms-auto movie-list-all-btn">
                            <span className="me-3">Xem tất cả</span>
                            <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
                        </a>
                    </div>
                </div>
                <ul className="row movie-list row-gap-4">
                    {movies.map((movie, index) => (
                        <li key={index} className="col-3 movie-item">
                            <a href="#" title={movie.title} className="d-flex flex-column">
                                <div className="movie-thumbnail">
                                    <img src={movie.image} className="movie-thumbnail-img" alt={movie.title} />
                                </div>
                                <div className="movie-title-wrapper">
                                    <p className="movie-title movie-main-title">{movie.vnTitle}</p>
                                    <p className="movie-title movie-sub-title">{movie.enTitle}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MovieList;
