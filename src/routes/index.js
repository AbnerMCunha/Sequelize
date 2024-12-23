const express = require('express') ;
const pessoas = require('./pessoasRoutes.js') ;

//Parametro app, é o parametro app passado em app.js
module.exports = app => {
    express.json(),
    pessoas
}
