import { React } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoadImage from "./LazyLoadImage";

function MovieList({ data: movies, title, isLoading }) {
    return (
        <>
            <div className="movie-list-wrapper mb-5">
                <div className="row mb-3 movie-list-title">
                    <div className="col">
                        <h1>{title}</h1>
                    </div>
                    <div className="col d-flex">
                        <Link to="/" className="my-auto ms-auto movie-list-all-btn">
                            <span className="me-3">Xem tất cả</span>
                            <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
                        </Link>
                    </div>
                </div>
                <ul className="row movie-list row-gap-4">
                    {/* {isLoading ? (
                        <>
                            {Array.from({ length: movies.length }).map((_, index) => (
                                <div key={index} className="col-3 movie-item movie-placeholder" aria-hidden="true">
                                    <div className="movie">
                                        <img
                                            src="https://critics.io/img/movies/poster-placeholder.png"
                                            className="placeholder movie-thumbnail"
                                            alt="Movie loading..."
                                        />
                                        <div className="movie-title-wrapper placeholder-glow">
                                            <p className="placeholder col-11 bg-light"></p>
                                            <p className="placeholder col-8 bg-secondary"></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : ( */}
                        <>
                            {movies &&
                                movies.map((movie, index) => (
                                    <li key={index} className="col-3 movie-item">
                                        <Link to="/" title={movie.title} className="d-flex flex-column">
                                            <div className="movie">
                                                <LazyLoadImage src={movie.image} className="movie-thumbnail" alt={movie.title}/>
                                                {/* <img src={movie.image} className="movie-thumbnail" alt={movie.title} /> */}
                                                <div className="movie-title-wrapper">
                                                    <p className="movie-title movie-main-title">{movie.vnTitle}</p>
                                                    <p className="movie-title movie-sub-title">{movie.enTitle}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                        </>
                    {/* )} */}
                </ul>
            </div>
        </>
    );
}

export default MovieList;
