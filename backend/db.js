const Sequelize = require('sequelize');

const usuariosModel = require('./models/usuarios');
const sequelize = new Sequelize('freeLearning','root','',{ 
    host:'localhost', 
    dialect:'mysql'
});

const usuario= usuariosModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    usuario
}