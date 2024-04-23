import express from 'express';
import cors from "cors"
import { query } from '../services/queries/index.js';
import { mutation } from '../services/mutations/index.js';
import { remove } from '../services/delete/index.js';

const app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server up!');
});

app.get('/:page', (req, res) => {
    const { page } = req.params;
    let queryResponse = query(page, req.query)
    queryResponse.then((data) => {
        res.send(data)
    })
});

app.post("/:page", (req, res) => {
    const { page } = req.params;
    const body = req.body;
    let mutationResponse = mutation(page, req.query, body)
    mutationResponse.then((data) => {
        res.send(data)
    })
})

app.delete("/:page", (req, res) => {
    const { page } = req.params;
    let deleteResponse = remove(page, req.query)
    deleteResponse.then((data) => {
        res.send(data)
    })
})

// Definindo a porta do servidor
const PORT = process.env.PORT || 3001;

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});