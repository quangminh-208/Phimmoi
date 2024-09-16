import BaseFooter from "../components/BaseFooter";
import BaseHeader from "../components/BaseHeader";
import MovieList from "../components/MovieList";
import TopMovieList from "../components/TopMovieList";

function HomePage() {
    return (
        <>
            <BaseHeader />
            <div className="container my-5">
                <div className="row">
                    <div className="col-8">
                        <MovieList title="Phim Anime hay" />
                    </div>
                    <div className="col-4">
                        <TopMovieList title="Top Anime hay" className="col-12" />
                    </div>
                </div>
            </div>

            <BaseFooter />
        </>
    );
}

export default HomePage;
