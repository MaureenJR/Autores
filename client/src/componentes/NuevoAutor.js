import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //Redirigir a otra URL o pagina

const NuevoAutor = () => {
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [libros, setLibros] = useState(false);
    const [cuentos, setCuentos] = useState(false);
    const [articulos, setArticulos] = useState(false);

    const navigate = useNavigate();

    const guardarAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/autores", {
            nombre,
            imagen,
            libros,
            cuentos,
            articulos
        })
            .then ( res => navigate("/"))
            .catch (err => console.log(err));
    }

    return(
        <div>
            <h3>Nuevo Autor</h3>
            <form onSubmit={guardarAutor}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={nombre} className="form-control" onChange={e => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label>URL de Imagen:</label>
                    <input type="text" name="imagen" value={imagen} className="form-control" onChange={e => setImagen(e.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" id="cuentos" name="cuentos" checked={cuentos} onChange={e => setCuentos(e.target.checked)}/>
                    <label htmlFor="cuentos"> Autor de Cuentos</label>
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" id="libros" name="libros" checked={libros} onChange={e => setLibros(e.target.checked)}/>
                    <label htmlFor="libros"> Autor de Libros</label>
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" id="articulos" name="articulos" checked={articulos} onChange={e => setArticulos(e.target.checked)}/>
                    <label htmlFor="articulos"> Autor de Articulos</label>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar"/>
            </form>
        </div>
    );
}

export default NuevoAutor;

