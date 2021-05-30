const router = require('express').Router();
// import ManagementController from '../controller/ManagementController';
const {tema} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const temas= await tema.findAll();
    res.json(temas);
});

router.get('/:id', async (req, res) =>{
    const temas= await tema.findOne({
        where: { temaId: req.params.id }
    });
    res.json(temas);
});

router.post('/', async (req, res) =>{
    const temas= await tema.create(req.body);
    res.json(temas);
});

router.put('/:id', async (req, res) =>{
    await tema.update(req.body,{
        where: { temaId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await tema.destroy(req.body,{
        where: { temaId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;