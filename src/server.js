import express from "express";
// import { fileURLToPath } from 'url'; // Importa la función fileURLToPath
// import { dirname } from 'path'; // Importa la función dirname

// //initialization
// const __filename = fileURLToPath(import.meta.url); // Obtiene el nombre del archivo actual
// const __dirname = dirname(__filename); // Obtiene el directorio actual
export const app = express();

//settings
//app.set("views", path.join(__dirname, "views"))
//middlewares
app.use(express.urlencoded({extended:false}))
//global variables

//routes
app.get("/", (req, res)=>{
    res.send("hello")
})
//static files
//app.use(express.static(dirname.join(__dirname, "public")))

// Iniciar el servidor
app.set("port", process.env.PORT || 3100);



