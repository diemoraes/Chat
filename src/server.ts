import express from "express";
import "./database";
import { routes } from "./routes";
const app = express();


app.use(express.json());
app.use(routes);

/*
app.get("/", (req, res) => {
    return res.json({
        message:"Ola Mundo!"
    })
});

app.post("/users", (req, res) => {
    return res.json({
        message:"Usuário Salvo com Suceso!"
    })
})*/

app.listen(3333, () => console.log("Server is running on port 3333"));
