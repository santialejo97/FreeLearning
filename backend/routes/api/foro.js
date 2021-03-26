const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {foro} = require('../../db');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', async (req, res) =>{
    const foros= await foro.findAll();
    res.json(foros);
});
router.get('/:id', async (req, res) =>{
    const foros= await foro.findOne({
        where: { foroId: req.params.id }
    });
    res.json(foros);
});

router.post('/', async (req, res) =>{
    req.body.foroPassword= bcrypt.hashSync(req.body.foroPassword,10);
    const foros= await foro.create(req.body);
    res.json(foros);
});

router.put('/:id', async (req, res) =>{
    req.body.foroPassword= bcrypt.hashSync(req.body.foroPassword,10);
    await foro.update(req.body,{
        where: { foroId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await foro.destroy(req.body,{
        where: { foroId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;