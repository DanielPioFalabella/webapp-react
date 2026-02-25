// creo un form
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewForm = () => {
    const initialFormData = {
        name: "",
        text: "",
        vote: 0
    }
    // var di stato per salvare l'input dell'utente
    const [formData, setFormData] = useState(initialFormData)

    // funzione per gestire i dati del form
    function formHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // funzione per gestire chiamata e submit del form
    const {id} = useParams()
    const endpoint = `http://localhost:3000/movie/${id}/reviews`
    // submit per nn perdere i dati al refresh della pagina
    function submitHandler(e) {
        e.preventDefault();

        // fare chiamata con axios
        axios.post(endpoint, formData, {headers: "Content-Type: application/json"})
        // fare in modo che mi svuota i campi del form dopo aver fatto la chiamata
        .then(initialFormData)
        .catch(err => console.log(err))

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name} 
                    onChange={formHandler}/>
            </div>
            <div>
                <label>Descrizione</label>
                <input
                    type="text"
                    name="text"
                    value={formData.text} 
                    onChange={formHandler}/>
            </div>
            <div>
                <label>Voto</label>
                <input
                    type="number"
                    name="vote"
                    value={formData.vote} 
                    onChange={formHandler}/>
            </div>

            <button>Aggiungi</button>
        </form>
    )
}

export default ReviewForm