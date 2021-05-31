module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        usuarioId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temaNombre: type.STRING,
        temaImagen: type.STRING,
    })
}