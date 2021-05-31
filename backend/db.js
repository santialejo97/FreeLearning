const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiante');
const empleadosModel = require('./models/empleado');
const carrerasModel = require('./models/carrera');
const forosModel = require('./models/foro');
const respuestasModel = require('./models/respuesta_foro');
const publicacionesModel = require('./models/publicacion');
const lenguajesModel = require('./models/lenguaje');
//Chef_16032
const sequelize = new Sequelize('freeLearning','root','',{ 
    host:'localhost', 
    dialect:'mysql',
    logging: false
});

const estudiante= estudiantesModel(sequelize,Sequelize);
const empleado= empleadosModel(sequelize,Sequelize);
const carrera= carrerasModel(sequelize,Sequelize);
const lenguage= lenguajesModel(sequelize,Sequelize);
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