import express from 'express';
import { query } from '../services/queries/index.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server up!');
});

app.get('/:page', (req, res) => {
    const { page } = req.params;
    let queryResponse = query(page, req.query)
    queryResponse.then((data) => {
        res.send(data.message)
    })
});

app.post("/:page", (req, res) => {
    const { page } = req.params;
    const body = req.body;
    let mutationResponse = query(page, req.query)
    mutationResponse.then((data) => {
        res.send(data.message)
    })
})

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});