const router = require('express').Router();
const bcript = require('bcriptjs');
// import ManagementController from '../controller/ManagementController';
const {empleado} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const empleados= await empleado.findAll();
    res.json(empleados);
});
router.get('/:id', async (req, res) =>{
    const empleado= await empleado.findOne({
        where: { empleadoId: req.params.id }
    });
    res.json(empleado);
});

router.post('/', async (req, res) =>{
    req.body.empleadoPassword= bcript.hashSync(req.body.empleadoPassword,10);
    const empleados= await empleado.create(req.body);
    res.json(empleados);
});

router.put('/:id', async (req, res) =>{
    req.body.empleadoPassword= bcript.hashSync(req.body.empleadoPassword,10);
    await empleado.update(req.body,{
        where: { empleadoId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await empleado.destroy(req.body,{
        where: { empleadoId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;