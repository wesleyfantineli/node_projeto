const mysql = require('mysql');

exports.databaseCredentials = {
    host: "localhost",
    database: "bdapi",
    user: "root",
    password: "1234",
    dialect: "mysql"
};

const {Sequelize, Model, DataTypes} = require('sequelize');
exports.sequelize = new Sequelize(
    exports.databaseCredentials.database,
    exports.databaseCredentials.user,
    exports.databaseCredentials.password,
    {
        host: exports.databaseCredentials.host,
        dialect: exports.databaseCredentials.dialect
    });

exports.Usuario = require('../models/usuario').init(exports.sequelize, Sequelize);
