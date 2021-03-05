module.exports = (sequelize, type) => {
    return sequelize.define('estudiante', {
        estudianteId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estudianteNombre: type.STRING,
        estudianteEmail: type.STRING,
        estudiantePassword: type.STRING,
        estudiantePoliticaDatos: type.INTEGER,
        fk_carreraId: type.INTEGER,
        fk_tipoUsuarioId: type.INTEGER,
        fk_estadoId: type.INTEGER

        

    })
}