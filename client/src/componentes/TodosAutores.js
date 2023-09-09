//useState: -> el cambio se va a ver reflejado en el componente (se modifica en el momento)
//useEffect: ejecuta funcion ANTES de que se monte el componente

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TodosAutores = () => {
    const [autores, setAutores] = useState([]);

    //Antes de montar el componente, llamamos la ruta que tiene la lista de autores y se almacena en useState
    useEffect(() => {
        axios.get("http://localhost:8000/api/autores")
            .then( res => setAutores(res.data) )
            .catch( err => console.log(err) );
    }, [])

    const borrarAutor = id => {
        axios.delete("http://localhost:8000/api/autores/" +id)
            .then(res => {
                let nuevaLista = autores.filter(autor => autor._id !== id);
                setAutores(nuevaLista);
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <Link to="/nuevo" className='btn btn-success'>Nuevo Autor</Link>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Libros</th>
                        <th>Cuentos</th>
                        <th>Articulos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        autores.map((autor, index) => (
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <img src={autor.imagen} alt="Autor" className='img-fluid'/>
                                </td>
                                <td>
                                    {
                                        autor.libros ? <span className='text-success'>Si</span> : <span className='text-danger'>No</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.cuentos ? <span className='text-success'>Si</span> : <span className='text-danger'>No</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.articulos ? <span className='text-success'>Si</span> : <span className='text-danger'>No</span>
                                    }
                                </td>
                                <td>
                                    <Link className='btn btn-warning' to={`/editar/${autor._id}`}>Editar</Link>
                                    <button className='btn btn-danger ms-2' onClick={()=>borrarAutor(autor._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodosAutores;