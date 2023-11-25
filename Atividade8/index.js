
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculadoraRoutes = require('./routes/calculadoraRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
