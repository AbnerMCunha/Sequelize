const express = require('express');
const router = require('./routes') //Deixando apenas './routes', ele já compreende o arquivo index.js da pasta em questão.
const app = express();

console.log('a');

app.use(router) ; 
console.log('b');
//app.use(express.json());

// app.get('/teste', (req, res) => {
//   res
//     .status(200)
//     .send({ mensagem: 'boas-vindas à API' });
// });

module.exports = app;
