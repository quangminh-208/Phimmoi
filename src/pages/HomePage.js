import { useState } from "react";
import BaseHeader from "../components/BaseHeader";
import BaseFooter from "../components/BaseFooter";
import BackToTop from "../components/BackToTop";
import Banner from "../components/Banner";
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
                        <MovieList title="Phim lẻ ra mắt" category="" params={{ page: 1, limit: 12, order: "modified:desc" }} />
                        <MovieList title="Phim hoạt hình ra mắt" category="hoathinh" params={{ page: 1, limit: 12, order: "modified:desc" }} />
                        <MovieList title="Phim bộ ra mắt" category="" params={{ page: 1, limit: 12, order: "modified:desc" }} />
                    </div>
                    <div className="col ps-5">
                        <TopMovieList title="Top Anime hay" category="hoathinh" />
                        <TopMovieList title="Top phim lẻ" category="" />
                        <TopMovieList title="Top phim bộ" category="" />
                    </div>
                </div>
            </div>

            <BaseFooter />
            <BackToTop />
        </>
    );
}

export default HomePage;
