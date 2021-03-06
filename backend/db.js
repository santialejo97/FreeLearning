const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiantes');
const empleadosModel = require('./models/empleados');
const sequelize = new Sequelize('freeLearning','root','',{ 
    host:'localhost', 
    dialect:'mysql'
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const estudiante= empleadosModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante
}