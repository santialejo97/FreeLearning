const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const carreraModel = require('./models/carrera');

const sequelize = new Sequelize('freeLearning','root','Chef_16032',{ 
    host:'localhost', 
    dialect:'mysql'
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const empleado= empleadosModel(sequelize,Sequelize);
const carrera= carreraModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante,empleado,carrera
}