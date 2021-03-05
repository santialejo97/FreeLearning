module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        usuarioId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioNombre: type.STRING,
        usuarioEmail: type.STRING,
        usuarioPassword: type.STRING,
        usuarioPoliticaDatos: type.INTEGER
    })
}