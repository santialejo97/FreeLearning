const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const sequelize = new Sequelize('freeLearning','root','',{ 
    host:'localhost', 
    dialect:'mysql'
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const empleado= empleadosModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante
}