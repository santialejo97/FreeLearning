const router = require('express').Router();
// import ManagementController from '../controller/ManagementController';
const {carrera} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const carreras= await carrera.findAll();
    res.json(carreras);
});
router.get('/:id', async (req, res) =>{
    const carrera= await carrera.findOne({
        where: { carreraId: req.params.id }
    });
    res.json(carrera);
});

router.post('/', async (req, res) =>{
    const carreras= await carrera.create(req.body);
    res.json(carreras);
});

router.put('/:id', async (req, res) =>{
    await carrera.update(req.body,{
        where: { carreraId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await carrera.destroy(req.body,{
        where: { carreraId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;