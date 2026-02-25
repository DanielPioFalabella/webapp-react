// creo un form
import { useState } from "react";

const ReviewForm = () => {
    // var di stato per salvare l'input dell'utente
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: 0
    })

    // funzione per gestire i dati del form
    // nel nuovo oggetto dovranno esserci i dati precedenti + il nuovo valore
    function formHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // funzione per gestire chiamata e submit del form
    // submit per nn perdere i dati al refresh della pagina
    // fare chiamata con axios
    // fare in modo che mi svuota i campi del form dopo aver fatto la chiamata

    // return con il form e i dati da raccogliere
    return (
        <form onSubmit={formHandler}>
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