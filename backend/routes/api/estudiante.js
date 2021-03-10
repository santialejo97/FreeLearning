const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {estudiante} = require('../../db');
const cors = require('cors');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) =>{
    const estudiantes= await estudiante.findAll();
    res.json(estudiantes);
});

router.get('/:id', cors(), async (req, res) =>{
    const estudiante= await estudiante.findOne({
        where: { estudianteId: req.params.id }
    });
    res.json(estudiante);
});

router.post('/', cors(), async (req, res) =>{
    req.body.estudiantePassword= bcrypt.hashSync(req.body.estudiantePassword,10);
    const estudiantes= await estudiante.create(req.body);
    res.json(estudiantes);
});

router.put('/:id', cors(), async (req, res) =>{
    console.log(req.params);
    req.body.estudiantePassword= bcrypt.hashSync(req.body.estudiantePassword,10);
    await estudiante.update(req.body,{
        where: { estudianteId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await estudiante.destroy(req.body,{
        where: { estudianteId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;