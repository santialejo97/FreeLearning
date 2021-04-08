module.exports = (sequelize, type) => {
    return sequelize.define('respuesta_foros', {
        respuesta_foroId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        respuesta_foroDescripcion: type.STRING,
        fk_foroId: type.INTEGER,
        fk_estudianteId: type.INTEGER,
        fk_estadoId: type.INTEGER,
        fechaRegistro: type.DATE

    })
}