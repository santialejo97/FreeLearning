const router = require('express').Router();
// import ManagementController from '../controller/ManagementController';
const {usuario} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const usuarios= await usuario.findAll();
    res.json(usuarios);
});

router.post('/', async (req, res) =>{
    const usuarios= await usuario.create(req.body);
    res.json(usuarios);
});

router.put('/:id', async (req, res) =>{
    await usuario.update(req.body,{
        where: { usuarioId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await usuario.destroy(req.body,{
        where: { usuarioId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;