const Sequelize = require('sequelize');

const estudiantesModel = require('./models/estudiantes');
const sequelize = new Sequelize('freeLearning','root','Chef_16032',{ 
    host:'localhost', 
    dialect:'mysql'
});

const estudiante= estudiantesModel(sequelize,Sequelize);

sequelize.sync({ force: false})
.then(()=> {
    console.log('Tablas sincronizadas');
})

module.exports ={
    estudiante
}