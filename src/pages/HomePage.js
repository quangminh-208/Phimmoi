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
                        <MovieList title="Phim lẻ ra mắt" params={{ limit: 12, order: "modified:desc" }} />
                        <MovieList title="Phim hoạt hình ra mắt" params={{ limit: 12, order: "modified:desc", category: "hoathinh" }} />
                        <MovieList title="Phim bộ ra mắt" params={{ limit: 12, order: "modified:desc" }} />
                    </div>
                    <div className="col ps-5">  
                        <TopMovieList title="Top Anime hay" params={{ limit: 6, order: "view:desc", "filters[type]": "hoathinh" }} />
                        <TopMovieList title="Top phim lẻ" params={{ limit: 6, order: "view:desc" }} />
                        <TopMovieList title="Top phim bộ" params={{ limit: 6, order: "view:desc" }} />
                    </div>
                </div>
            </div>

            <BaseFooter />
            <BackToTop />
        </>
    );
}

export default HomePage;
