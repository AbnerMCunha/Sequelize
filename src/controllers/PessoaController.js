const database = require('../models');

class PessoaController {
    static async pegaTodas (req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (erro) {
            // erro
        }
    }
}

module.exports = PessoaController;
/*const { database } = require('../models')


class PessoaController {
    //Criando o Metodo Estatico para ele poder 
    static async pegaTodas(req, res){
        try {
            //Acessa o Modelo

            console.log('controler');

            const listaPessoas = await database.Pessoa.findAll();
            console.log(listaPessoas);

            return res.statusCode(200).json(listaPessoas)
            
        } catch (error) {
            console.log('error');
        }
    }
}

module.exports = PessoaController ;
*/