const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

app.use(
    cors({
        //URL React
        origin:"http://localhost:3000"
    })
)

//Iniciar DB
require("./server/config/mongoose.config");

//Importar Rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

app.listen(8000, () => console.log("Server listo!"));

/*
happy hacking
cd client
npm install axios react-router-dom
index.html -> cambiar nombre
bootstrap -> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
index.js -> <BrowserRouter> -> import 
App.js 

*/
