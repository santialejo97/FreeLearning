const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {foro} = require('../../db');
const cors = require('cors');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) =>{
    const foros= await foro.findAll();
    res.json(foros);
});

router.get('/:id', cors(), async (req, res) =>{
    const foros= await foro.findOne({
        where: { foroId: req.params.id }
    });
    res.json(foros);
});

router.post('/', cors(), async (req, res) =>{
    req.body.fk_estudianteId= req.usuarioId;
    const foros= await foro.create(req.body);
    res.json(foros);
});

router.put('/:id', cors(), async (req, res) =>{
    console.log(req.params);
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