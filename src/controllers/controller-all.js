'use strict';

const repository = require('../repositories/usuario-repository');
const md5 = require('md5');


//retorna um usuario baseado em um ID
exports.get = async(req, res, next) => {
    const codigo = req.params.id;
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
}


//inserir dados
exports.post = async(req, res, next) => {
    try {
        if(req.body.USR_EMAIL == ''){
            res.status(400).send({
                message: 'O campo e-mail é obrigatório',
            });
        }
        if(req.body.USR_SENHA == ''){
            res.status(400).send({
                message: 'O campo senha é necessário',
            });
        }
        else{
            var data = await repository.create({
                USR_EMAIL:   req.body.USR_EMAIL   ,
                USR_SENHA:   md5(req.body.USR_SENHA) 
            });
            res.status(201).send({
                message: 'Inserido com sucesso'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({
            message: 'Falha na inscrição',
            data: e
        });
    }
}

//faz um up
exports.update = async(req, res, next) => {
   try {
    var data = await repository.put(req.body.USR_ID, {
        USR_EMAIL:   req.body.USR_EMAIL,
        USR_SENHA:   md5(req.body.USR_SENHA) 
    });
    res.status(201).send({
        message: 'Alterado com sucesso'
    });
}
 catch (e) {
        res.status(400).send({
            message: 'Falha na alteração',
            data: e
        });
    }
}


//exclui
exports.delete = async (req, res) => {
    try {
        var data = await repository.delete(req.body.USR_ID);
        res.status(200).send({
            message: 'OK'
        })
    } catch (e) {
        res.status(400).send({
            message: 'NOK',
        })
    }
}

