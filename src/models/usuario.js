const mydb = require('../shared/conexao');
const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = mydb.sequelize;

module.exports = class Usuario extends Model{
    static init(sequelize, DataTypes){
        return super.init({
            USR_ID: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },

            USR_EMAIL: {
                type: Sequelize.STRING,
                trim: true,
            },
            USR_SENHA: {
                type: Sequelize.STRING,
                notEmpty: true,
                allowNull: false,
                validate: {
                    len: [8, 50],
                    notNull: {msg: 'A senha é obrigatória'},
                },
                trim: true,
            }
        },
            {
                sequelize,
                freezeTableName: true,
                timestamps: false,
                modelName: 'Usuario'
            });
      
    }
}