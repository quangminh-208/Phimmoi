import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies } from "../services/movieService";

function MovieList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async (params) => {
            const data = await getMovies(params);
            setMovies(data);
        };

        fetchData({
            page: 1, 
            limit:12,
            order: "view:desc"
        });
    }, []);

    return (
        <>
            <div className="movie-list-wrapper mb-5">
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
                            <a href="" title={movie.title} className="d-flex flex-column">
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
