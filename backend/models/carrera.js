module.exports = (sequelize, type) => {
    return sequelize.define('carrera', {
        carreraId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carreraNombre: type.STRING

    })
}