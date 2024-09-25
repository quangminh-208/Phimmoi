import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies } from "../services/movieService";

const RatingStars = (props) => {
    const stars = [];
    for (let i = 1; i <= props.rating; i++) {
        stars.push(
            <span key={i} className={i <= props.rating ? "star filled" : "star"}>
                <FontAwesomeIcon icon="fa-solid fa-star" className="fs-6 me-1" />
            </span>
        );
    }

    return <div className="movie-rating-stars">{stars}</div>;
};

function TopMovieList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async (params) => {
            const data = await getMovies(params);
            console.log("🚀 ~ fetchData ~ data:", data);
            setMovies(data);
        };

        fetchData({
            page: 1,
            limit: 6,
            order: "view:desc",
            "filters[type]": props.category
        });
    }, []);

    return (
        <>
            <div className="top-movie-list mb-5">
                <div className="row mb-3 top-movie-list-title">
                    <h1 className="col-12">
                        <FontAwesomeIcon icon="fa-solid fa-star" className="me-3" />
                        {props.title}
                    </h1>
                </div>
                <ul className="row movie-list">
                    {movies.map((movie, index) => (
                        <li key={index} className={`col-12 movie-item-wrapper ${index === 0 ? "first-movie" : ""}`}>
                            <a className="row movie-item">
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
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TopMovieList;
