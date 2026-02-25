import { Link } from "react-router-dom"

const FilmCard = ({film}) => {
    const {id, title, director, genre, release_year, abstract, image} = film
    return (
        <div className="film-card-container">
            <h3>{title}</h3>
            <img src={`/movies_cover/${image}`} alt={title} />
            <p>{director}</p>
            <p>{genre}</p>
            <p>{release_year}</p>
            <p className="abstract">{abstract}</p>
            <Link to={`/movie/${film.id}`}>
                <button>Mostra Dettaglio Film</button>
            </Link>
        </div>
    )
}

export default FilmCard