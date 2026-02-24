const FilmCardReview = ({review}) => {
    const {id, movie_id, name, vote, text} = review
    return (
        <div className="film-card-container">
            <h3>{name}</h3>
            <p>{vote}</p>
            <p>{text}</p>
        </div>
    )
}

export default FilmCardReview