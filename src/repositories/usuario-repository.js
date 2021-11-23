'use strict';

const mydb = require('../shared/conexao');
const Usuario = mydb.Usuario;

exports.get = async(codigo) => {
    var res;
    if(codigo == -1){
        res = await Usuario.findAll();
    }else {
        res = await Usuario.findOne({
            where: {
                USR_ID: codigo
            }
        });
    }
    return res;
}

exports.create = async(data) =>{
    return await Usuario.create(data);
}

exports.put = async(id, data) =>{
    var res = await Usuario.update(
        data,
        {
            where: {
                USR_ID: id
            }
        });
    return res;
}

exports.delete = async(id) => {

    var res = await Usuario.destroy({
        where: {
            USR_ID: id
        }
    });
    return res;
}