import { useState } from "react";
import Banner from "../components/Banner";
import BaseFooter from "../components/BaseFooter";
import BaseHeader from "../components/BaseHeader";
import MovieList from "../components/MovieList";
import TopMovieList from "../components/TopMovieList";

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return (
        <>
            <BaseHeader />
            <Banner />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <MovieList title="Phim mới ra mắt" />
                        <MovieList title="Phim mới ra mắt" categori="hoathinh" />
                        <MovieList title="Phim mới ra mắt" categori="hoathinh" />
                    </div>
                    <div className="col ps-5">
                        <TopMovieList title="Top Anime hay" categori="hoathinh" />
                        <TopMovieList title="Top phim lẻ" categori="" />
                        <TopMovieList title="Top phim bộ" categori="" />
                    </div>
                </div>
            </div>

            <BaseFooter />
        </>
    );
}

export default HomePage;
