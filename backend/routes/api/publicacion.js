const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {estudiante} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const estudiantes= await estudiante.findAll();
    res.json(estudiantes);
});
router.get('/:id', async (req, res) =>{
    const estudiantes= await estudiante.findOne({
        where: { estudianteId: req.params.id }
    });
    res.json(estudiantes);
});

router.post('/', async (req, res) =>{
    req.body.estudiantePassword= bcrypt.hashSync(req.body.estudiantePassword,10);
    const estudiantes= await estudiante.create(req.body);
    res.json(estudiantes);
});

router.put('/:id', async (req, res) =>{
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