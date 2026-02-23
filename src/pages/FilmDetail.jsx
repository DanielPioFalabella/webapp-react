import { useParams } from "react-router-dom"

const FilmDetail = () => {
    // recupero l'id della pagina
    const { id } = useParams()

    return (
        <>
        <h1>FilmDetail{id}</h1>
        <div className="film-container">
            <h3>title</h3>
            <img src="" alt="" />
            <p>genre</p>
            <p>release year</p>
        </div>
        </>
    )
}

export default FilmDetail