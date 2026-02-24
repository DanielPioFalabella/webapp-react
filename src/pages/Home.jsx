import axios from "axios";
import { useState, useEffect } from "react"
import FilmCard from "../components/FilmCard";

const Home = () => {
    // imposto var di stato
    const [films, setFilms] = useState([]);

    // imposto chiamata con axios
    const endpoint = "http://localhost:3000"

    function fetchFilms() {
        axios.get(endpoint)
            .then(res => setFilms(res.data))
            .catch(err => console.log(err))
    }

    // funzione di rendering per ciclare sui libri
    const renderFilms = films.map((film) => {
        return (
            <FilmCard key={film.id}/>
        )
    })

    // eseguo la chiamata con useEffect
    useEffect(() => {
        fetchFilms()
    }, [])

    return (
        <h1>Home</h1>
        {renderFilms()}
    )
}

export default Home