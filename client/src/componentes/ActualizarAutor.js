import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ActualizarAutor = () => {
    const {id} = useParams(); //Obtener de URL el id del autor

    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [libros, setLibros] = useState(false);
    const [cuentos, setCuentos] = useState(false);
    const [articulos, setArticulos] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/" + id)
            .then(res => {
                //res.data = Objeto autor
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setLibros(res.data.libros);
                setCuentos(res.data.cuentos);
                setArticulos(res.data.articulos);
            })
            .catch(err => console.log(err));
    }, [id])

    const actualizarAutor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/autores/" + id, {
            nombre,
            imagen,
            libros,
            cuentos,
            articulos
        })
            .then(res => navigate("/"))
            .catch(err => console.log(err));
    }

    return(
        <div>
        <h3>Editar Autor</h3>
        <form onSubmit={actualizarAutor}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={nombre} className="form-control" onChange={e => setNombre(e.target.value)}/>
            </div>
            <div>
                <label>URL de Imagen:</label>
                <input type="text" name="imagen" value={imagen} className="form-control" onChange={e => setImagen(e.target.value)}/>
                <img className="img-fluid" alt="Autor" src={imagen}/>
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
            <input type="submit" className="btn btn-success mt-3" value="Actualizar"/>
        </form>
    </div>
    );
}

export default ActualizarAutor;