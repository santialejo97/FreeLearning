const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const carrerasModel = require('./models/carrera');
const temasModel = require('./models/tema');
const forosModel = require('./models/foro');
const respuestasModel = require('./models/respuesta_foro');
const publicacionesModel = require('./models/publicacion');
//Chef_16032

//b9dda9592d64cb:4c4d3caa@us-cdbr-east-04.cleardb.com/heroku_3b0fafbdc4f5d9f?reconnect=true
//const sequelize = new Sequelize('freeLearning','root','Chef_16032',{ 
const sequelize = new Sequelize('heroku_3b0fafbdc4f5d9f','b9dda9592d64cb','4c4d3caa',{ 
    host:'us-cdbr-east-04.cleardb.com', 
    dialect:'mysql',
    logging: false
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const empleado= empleadosModel(sequelize,Sequelize);
const carrera= carrerasModel(sequelize,Sequelize);
const tema= temasModel(sequelize,Sequelize);
const foro= forosModel(sequelize,Sequelize);
const respuesta= respuestasModel(sequelize,Sequelize);
const publicacion= publicacionesModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante, empleado, carrera,foro, respuesta, publicacion,tema
}