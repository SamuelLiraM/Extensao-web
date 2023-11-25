
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.post('/dados', (req, res) => {
    const dados = req.body;
    res.render(path.join(__dirname, 'views', 'dados.html'), dados);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
