module.exports = (sequelize, type) => {
    return sequelize.define('foro', {
        foroId:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        foroNombre: type.STRING

    })
}