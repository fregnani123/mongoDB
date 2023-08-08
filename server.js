require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const routes = require('./routes');
const path = require('path');

mongoose.connect(process.env.connectionsMongoDB
).then(()=>{
    console.log('Conectado á base de dados.');
    app.emit('pronto');
}).catch((e)=> {
    console.log(e);
})

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public', 'index.ejs'));
});

app.on('pronto', ()=> {
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
})
