import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default RatingStars;