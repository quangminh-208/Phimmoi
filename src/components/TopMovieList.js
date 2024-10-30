import { React, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingStars from "./RatingStar";
import LazyLoadImage from "./LazyLoadImage";

function TopMovieList({ data: movies, title, isLoading }) {
    return (
        <>
            <div className="top-movie-list mb-5">
                <div className="row mb-3 top-movie-list-title">
                    <h1 className="col-12">
                        <FontAwesomeIcon icon="fa-solid fa-star" className="me-3" />
                        {title}
                    </h1>
                </div>
                <ul className="row movie-list">
                    {isLoading ? (
                        <>
                            {Array.from({ length: movies.length }).map((_, index) => (
                                <li key={index} className={`col-12 movie-item-wrapper ${index === 0 ? "first-movie" : ""}`}>
                                    <Link to="/" className="row movie-item">
                                        <div className="col-3 movie-thumbnail">
                                            <img
                                                src="https://critics.io/img/movies/poster-placeholder.png"
                                                alt="Movie loading..."
                                                className="placeholder movie-thumbnail-img"
                                            />
                                        </div>
                                        <div className="col d-flex movie-info-wrapper placeholder-glow">
                                            <div className="movie-info col d-flex flex-column gap-2">
                                                <p className="movie-main-title placeholder col-10"></p>
                                                <p className="movie-sub-title placeholder col-8"></p>
                                                <p className="movie-views placeholder col-2"></p>
                                                <p className="placeholder col-2"></p>
                                            </div>
                                            <div className="ms-auto my-auto p-3 placeholder col-2 bg-secondary"></div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </>
                    ) : (
                        <>
                            {movies &&
                                movies.map((movie, index) => (
                                    <li key={index} className={`col-12 movie-item-wrapper ${index === 0 ? "first-movie" : ""}`}>
                                        <Link to="/" className="row movie-item">
                                            <div className="col-3 movie-thumbnail">
                                                <LazyLoadImage src={movie.image} alt={movie.title} className="movie-thumbnail-img" />
                                            </div>
                                            <div className="col d-flex movie-info-wrapper">
                                                <div className="movie-info">
                                                    <p className="movie-main-title">{movie.vnTitle}</p>
                                                    <p className="movie-sub-title">{movie.enTitle}</p>
                                                    <p className="movie-views">{movie.views} lượt xem</p>
                                                    <RatingStars rating={movie.rate} />
                                                </div>
                                                <div className="ms-auto my-auto movie-status">
                                                    <span>{movie.status}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                        </>
                    )}
                </ul>
            </div>
        </>
    );
}

export default TopMovieList;
