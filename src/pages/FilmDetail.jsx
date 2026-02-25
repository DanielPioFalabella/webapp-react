import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import FilmCardReview from "../components/FilmDetailReview";
import FilmCard from "../components/FilmCard";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const FilmDetail = () => {
    // recupero l'id della pagina
    const { id } = useParams()

    // imposto var di stato
        const [filmReview, setFilmReview] = useState([]);
        const [film, setFilm] = useState([]);

    // imposto chiamata con axios
        const endpoint = "http://localhost:3000/movie/"
    
        function fetchFilmReview() {
            axios.get(endpoint + id)
                .then(res => {
                    setFilm(res.data.movie);
                    setFilmReview(res.data.reviewResults);
                })
                .catch(err => console.log(err))
        }

    // funzione di rendering per ciclare sui film
        const renderFilmReviews = filmReview.map((review) => {
            return (
                <FilmCardReview key={review.id} review={review} />
            )
        })

    // eseguo la chiamata con useEffect
            useEffect(() => {
                fetchFilmReview()
            }, [id])

    return (
        <>
        <div className="film-container">
            <FilmCard key={id} film={film}/>
            {renderFilmReviews}
        </div>
        <ReviewForm />
        <Link to="/">
            <button>Torna alla home</button>
        </Link>
        </>
    )
}

export default FilmDetail