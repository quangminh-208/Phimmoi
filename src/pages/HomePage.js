import Banner from "../components/Banner";
import BaseFooter from "../components/BaseFooter";
import BaseHeader from "../components/BaseHeader";
import MovieList from "../components/MovieList";
import TopMovieList from "../components/TopMovieList";

function HomePage() {
    return (
        <>
            <BaseHeader />
            <Banner />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <MovieList title="Phim mới ra mắt" />
                    </div>
                    <div className="col-4 ps-5">
                        <TopMovieList title="Top Anime hay" className="col-12" />
                        <TopMovieList title="Top phim lẻ" className="col-12 mt-5" />
                        <TopMovieList title="Top phim bộ" className="col-12 mt-5" />
                    </div>
                </div>
            </div>

            <BaseFooter />
        </>
    );
}

export default HomePage;
