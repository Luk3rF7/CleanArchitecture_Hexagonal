import dotenv from "dotenv"
import express from "express"
dotenv.config()

const app = express()
const port = process.env.API_PORT || 4000

// Arquivo json :
app.use(express.json())
// Arquivo Formulario :
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("<h1> Arquiterura Hexagonal !! </h1>")
})
// excutando backend
app.listen(port, () => {
    console.log("backend iniciado...")
    console.log(`http://localhost:${port}`)
})
