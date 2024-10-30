import { React, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getTotalMovies } from "../services/movieService";
import { getMovies } from "../services/movieService";
import BaseHeader from "../components/BaseHeader";
import Banner from "../components/Banner";
import BaseFooter from "../components/BaseFooter";
import MovieList from "../components/MovieList";
import TopMovieList from "../components/TopMovieList";
import Pagination from "../components/Pagination";
import LoadingLayer from "../components/LoadingLayer";

function MovieListPage() {
    const { categoryName } = useParams();
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState({
        topSingleMovies: [],
        topAnimeMovies: [],
        topSeriesMovies: [],
    });
    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    const fetchTopMovies = useCallback(async () => {
        try {
            const [topSingleMoviesData, topAnimeMoviesData, topSeriesMoviesData] = await Promise.all([
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "single" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "hoathinh" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "series" }),
            ]);

            setTopMovies({
                topSingleMovies: topSingleMoviesData,
                topAnimeMovies: topAnimeMoviesData,
                topSeriesMovies: topSeriesMoviesData,
            });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }, []);

    const getTotalPages = useCallback(async () => {
        const totalMovies = await getTotalMovies({ limit: 0, "filters[category.slug]": categoryName });

        setTotalPages(Math.ceil(totalMovies / 20));
    }, [categoryName]);

    const fetchMovies = useCallback(async () => {
        setIsLoading(true);
        try {
            const movieList = await getMovies({ page: pageNumber, limit: 32, order: "modified:desc", "filters[category.slug]": categoryName });
            setMovies(movieList);
        } catch (error) {
            console.error("Error fetching movies :", error);
        } finally {
            setIsLoading(false);
        }
    }, [categoryName, pageNumber]);

    useEffect(() => {
        fetchTopMovies();
    }, [fetchTopMovies]);

    useEffect(() => {
        getTotalPages();
    }, [categoryName, getTotalPages]);

    useEffect(() => {
        fetchMovies();
    }, [pageNumber, categoryName, fetchMovies]);

    return (
        <>
            <BaseHeader />
            <Banner />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <MovieList title="Danh sách phim " data={movies} isLoading={isLoading} />
                        {totalPages > 0 && (
                            <Pagination currentPage={pageNumber} totalPages={totalPages} onPageChange={(page) => handlePageChange(page)} />
                        )}
                    </div>
                    <div className="col ps-5">
                        <TopMovieList title="Top Anime hay" data={topMovies.topAnimeMovies} isLoading={isLoading} />
                        <TopMovieList title="Top phim lẻ" data={topMovies.topSingleMovies} isLoading={isLoading} />
                        <TopMovieList title="Top phim bộ" data={topMovies.topSeriesMovies} isLoading={isLoading} />
                    </div>
                </div>
            </div>
            <BaseFooter />
            {isLoading && <LoadingLayer />}
        </>
    );
}

export default MovieListPage;
