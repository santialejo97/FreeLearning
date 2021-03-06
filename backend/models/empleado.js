module.exports = (sequelize, type) => {
    return sequelize.define('empleado', {
        empleadoId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        empleadoNombre: type.STRING,
        empleadoEmail: type.STRING,
        empleadoPassword: type.STRING,
        empleadoPoliticaDatos: type.INTEGER,
        fk_tipoUsuarioId: type.INTEGER,
        fk_estadoId: type.INTEGER

    })
}