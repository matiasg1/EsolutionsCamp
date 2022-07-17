require("dotenv").config();                             

const cors = require("cors");
const express   = require("express");
const mongoose  = require("mongoose");
const mongoString = process.env.DATABASE_URL;           

mongoose.connect(mongoString);                          
const database = mongoose.connection;

database.on("error", (error) => {                       
    console.error(error);
});

database.once("connected", () =>{                        
    console.log("Se conecto la base de datos");
});

const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes)

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecutandose en http://${process.env.PORT}:${process.env.HOST}`)
})