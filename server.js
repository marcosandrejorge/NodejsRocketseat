const express = require('express');//express é para rotas
const mongoose = require('mongoose');//para integração com o mongodb
const cors = require('cors');
//Iniciando o app
const app = express();
//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser:true}
);

//Permite que seja enviado json para a aplicação
app.use(express.json());

//Permitir que outros dominios acesse a API, existem outras configurações se quiser.
app.use(cors());

app.use('/api',require("./src/route"));

app.listen(3001);
