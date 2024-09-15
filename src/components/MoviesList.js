import { React, useEffect, useState } from "react";
import { API_BASE_URL, CORS_URL, MOVIES_LIMIT } from "../constants.js";
import { getMoviesData } from "../services/fetchDataAPI.js";
import { moviesData } from "../movies.js";

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     const fetchData = async (url) => {
    //         const data = await getMoviesData(url);
    //         setMovies(data);
    //     };

    //     fetchData(`${CORS_URL}/${API_BASE_URL}/api/movies?page=1&limit=${MOVIES_LIMIT}`);
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = moviesData;
            setMovies(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container movie_list-wrapper">
                <div className="col-8">
                    <div className="row movie_list-title">
                        <h4>{ props.listTitle }</h4>
                    </div>
                    <ul className="row movie_list row-gap-4">
                        {movies.map((movie, index) => (
                            <li className="col-3 movie_item">
                                <a href="#" title={movie.title} className="d-flex flex-column">
                                    <div className="movie-thumbnail">
                                        <img src={movie.image} className="movie-thumbnail_img" />
                                    </div>
                                    <div className="movie-title_wrapper">
                                        <p className="movie-title movie-main_title">{movie.vnTitle}</p>
                                        <p className="movie-title movie-sub_title">{movie.enTitle}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-4"></div>
            </div>
        </>
    );
}
