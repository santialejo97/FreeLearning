const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const carrerasModel = require('./models/carrera');
const forosModel = require('./models/foro');
const respuestasModel = require('./models/respuesta_foro');
const publicacionesModel = require('./models/publicacion');

const sequelize = new Sequelize('freeLearning','root','Chef_16032',{ 
    host:'localhost', 
    dialect:'mysql'
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const empleado= empleadosModel(sequelize,Sequelize);
const carrera= carrerasModel(sequelize,Sequelize);
const foro= forosModel(sequelize,Sequelize);
const respuesta= respuestasModel(sequelize,Sequelize);
const publicacion= publicacionesModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante, empleado, carrera,foro, respuesta, publicacion
}