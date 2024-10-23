import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies } from "../services/movieService";
import RatingStars from "./RatingStar";

function TopMovieList({ data: movies, title}) {
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
                    {movies &&
                        movies.map((movie, index) => (
                            <li key={index} className={`col-12 movie-item-wrapper ${index === 0 ? "first-movie" : ""}`}>
                                <Link to="/" className="row movie-item">
                                    <div className="col-3 movie-thumbnail">
                                        <img src={movie.image} alt={movie.title} className="movie-thumbnail-img" />
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
                </ul>
            </div>
        </>
    );
}

export default TopMovieList;
