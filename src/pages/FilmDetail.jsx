import { useParams } from "react-router-dom"

const FilmDetail = () => {
    // recupero l'id della pagina
    const { id } = useParams()

    return (
        <h1>FilmDetail{id}</h1>
    )
}

export default FilmDetail