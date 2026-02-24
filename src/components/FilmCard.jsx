const FilmCard = ({film}) => {
    const {id, title, director, genre, release_year, abstract, image} = film
    return (
        <div className="film-card-container">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>{director}</p>
            <p>{genre}</p>
            <p>{release_year}</p>
            <p className="abstract">{abstract}</p>
        </div>
    )
}

export default FilmCard