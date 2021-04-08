module.exports = (sequelize, type) => {
    return sequelize.define('publicaciones', {
        publicacionId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        publicacionTitulo: type.STRING,
        publicacionDescripcion: type.STRING,
        fk_estudianteId: type.INTEGER,
        fk_tipoPublicacionId: type.INTEGER,
        fk_estadoId: type.INTEGER,
        publicacionFechaCreacion: type.DATE

    })
}