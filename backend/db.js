const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const carrerasModel = require('./models/carrera');
const temasModel = require('./models/tema');
const forosModel = require('./models/foro');
const respuestasModel = require('./models/respuesta_foro');
const publicacionesModel = require('./models/publicacion');
//Chef_16032
//const sequelize = new Sequelize('freeLearning','root','Chef_16032',{ 
//user password  localhost database
//b5dcee5f5d4776:fa884820@us-cdbr-east-04.cleardb.com/heroku_0922ccf225472e1

const sequelize = new Sequelize('heroku_0922ccf225472e1','b5dcee5f5d4776','fa884820',{ 
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