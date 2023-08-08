require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public', 'index.ejs'));
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
