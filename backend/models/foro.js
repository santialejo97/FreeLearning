module.exports = (sequelize, type) => {
    return sequelize.define('foros', {
        foroId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foroDescripcion: type.STRING,
        fk_estudianteId: type.INTEGER,
        fk_estadoId: type.INTEGER,
        fechaRegistro: type.DATE

    })
}