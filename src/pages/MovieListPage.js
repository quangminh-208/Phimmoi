import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTotalMovies } from "../services/movieService";
import BaseHeader from "../components/BaseHeader";
import Banner from "../components/Banner";
import BaseFooter from "../components/BaseFooter";
import MovieList from "../components/MovieList";
import TopMovieList from "../components/TopMovieList";
import Pagination from "../components/Pagination";

function MovieListPage() {
    const { catgoryName } = useParams();
    const [totalPage, setTotalPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    
    const handlePageChange = (page) => {
        setPageNumber(page);
    };
    
    useEffect(() => {
        const getTotalPage = async (params) => {
            const totalItems = await getTotalMovies(params);
            setTotalPage(Math.ceil(totalItems / 20));
        };

        getTotalPage({
            limit: 0,
            "filter[category]": catgoryName,
        });
    }, [catgoryName]);

    return (
        <>
            <BaseHeader />
            <Banner />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <MovieList
                            title="Danh sách phim "
                            params={{ page: { pageNumber }, limit: 20, order: "modified:desc", "filter[category]": { catgoryName } }}
                        />
                        {totalPage && <Pagination currentPage={pageNumber} totalPages={totalPage} onPageChange={(page) => handlePageChange(page)} />}
                    </div>
                    <div className="col ps-5">
                        <TopMovieList title="Top Anime hay" params={{ limit: 6, order: "view:desc", "filters[type]": "hoathinh" }} />
                        <TopMovieList title="Top phim lẻ" params={{ limit: 6, order: "views:desc" }} />
                        <TopMovieList title="Top phim bộ" params={{ limit: 6, order: "views:desc" }} />
                    </div>
                </div>
            </div>

            <BaseFooter />
        </>
    );
}

export default MovieListPage;
