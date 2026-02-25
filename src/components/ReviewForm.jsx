// creo un form
import { useState } from "react";

const ReviewForm = () => {
// var di stato per salvare l'input dell'utente
const [formData, setFormData] = useState({})

// funzione per gestire i dati del form
// nel nuovo oggetto dovranno esserci i dati precedenti + il nuovo valore

// funzione per gestire chiamata e submit del form
// submit per nn perdere i dati al refresh della pagina
// fare chiamata con axios
// fare in modo che mi svuota i campi del form dopo aver fatto la chiamata

// return con il form e i dati da raccogliere
return (
    <form>
        <div>
            <label>Nome</label>
            <input 
            type="text" 
            name="name" 
            value={} />
        </div>
        <div>
            <label>Descrizione</label>
            <input 
            type="text" 
            name="text" 
            value={} />
        </div>
        <div>
            <label>Voto</label>
            <input 
            type="number" 
            name="vote" 
            value={} />
        </div>
    </form>
)
}

export default ReviewForm