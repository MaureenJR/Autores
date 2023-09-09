import { Route, Routes } from "react-router-dom";
import TodosAutores from "./componentes/TodosAutores";
import NuevoAutor from "./componentes/NuevoAutor";
import ActualizarAutor from "./componentes/ActualizarAutor";

const App = () => {
  return (
    <div className="container">
      <h1>Autores</h1>
      <Routes>
        <Route path="/" exact element={<TodosAutores/>}/>
        <Route path="/nuevo" element={<NuevoAutor/>}/>
        <Route path="/editar/:id" element={<ActualizarAutor/>}/>
      </Routes>
    </div>
  );
}

export default App;
