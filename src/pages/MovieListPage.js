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
    const [movies, setMovies] = useState({
        totalMovies: 0,
        filterMovies: [],
        topSingleMovies: [],
        topAnimeMovies: [],
        topSeriesMovies: [],
    });
    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    const fetchData = useCallback(async () => {
        try {
            const [totalMoviesData, topSingleMoviesData, topAnimeMoviesData, topSeriesMoviesData] = await Promise.all([
                getTotalMovies({ limit: 0, "filters[category.slug]": categoryName }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "single" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "hoathinh" }),
                getMovies({ limit: 6, order: "view:desc", "filters[type]": "series" }),
            ]);

            setMovies({
                totalMovies: totalMoviesData,
                topSingleMovies: topSingleMoviesData,
                topAnimeMovies: topAnimeMoviesData,
                topSeriesMovies: topSeriesMoviesData,
            });

            setTotalPages(Math.ceil(movies.totalMovies / 20));
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setIsLoading(false);
        }
    }, [categoryName]);

    const fetchMoviesPerPage = useCallback(async () => {
        try {
            const [filterMoviesData] = await Promise.all([
                getMovies({ page: pageNumber, limit: 20, order: "modified:desc", "filters[category.slug]": categoryName }),
            ]);

            setMovies({ ...movies, filterMovies: filterMoviesData });
        } catch (error) {
            console.error("Error fetching movies :", error);
        } finally {
            setIsLoading(false);
        }
    }, [categoryName, pageNumber]);

    useEffect(() => {
        fetchData();
    }, [categoryName, fetchData]);

    useEffect(() => {
        fetchMoviesPerPage();
    }, [pageNumber, fetchMoviesPerPage]);

    return (
        <>
            <BaseHeader />
            <Banner />
            {isLoading ? (
                <LoadingLayer />
            ) : (
                <div className="container my-5">
                    <div className="row">
                        <div className="col-8">
                            <MovieList title="Danh sách phim " data={movies.filterMovies} />
                            {totalPages > 0 && (
                                <Pagination currentPage={pageNumber} totalPages={totalPages} onPageChange={(page) => handlePageChange(page)} />
                            )}
                        </div>
                        <div className="col ps-5">
                            <TopMovieList title="Top Anime hay" data={movies.topAnimeMovies} />
                            <TopMovieList title="Top phim lẻ" data={movies.topSingleMovies} />
                            <TopMovieList title="Top phim bộ" data={movies.topSeriesMovies} />
                        </div>
                    </div>
                </div>
            )}
            <BaseFooter />
        </>
    );
}

export default MovieListPage;
