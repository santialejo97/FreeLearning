module.exports = (sequelize, type) => {
    return sequelize.define('tema', {
        temaId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temaNombre: type.STRING,
        temaImagen: type.STRING

    })
}