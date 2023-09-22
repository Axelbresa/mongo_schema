import {app} from "./server.js"
import "dotenv/config.js";

//import "./database/database.js";

app.listen( app.get("port"), function() {
  console.log("La app está escuchando en http://localhost:port" );
});