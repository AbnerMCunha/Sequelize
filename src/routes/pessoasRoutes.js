const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController.js');

console.log('pessoasRoutes');
const router = Router() ; 

//router.get('/pessoas', pessoaController.pegaTodas )
router.get('/pessoas', (req, res) => pessoaController.pegaTodos );


module.exports = router ;