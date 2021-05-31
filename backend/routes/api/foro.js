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

router.get('/identificador/:id', cors(), async (req, res) =>{
    const foros= await foro.findOne({
        where: { foroId: req.params.id }
    });
    res.json(foros);
});

router.get('/creador/', cors(), async (req, res) =>{
    const foros= await foro.findAll({
        where: { fk_estudianteId: req.usuarioId }
    });
    res.json(foros);
});

router.post('/', cors(), async (req, res) =>{
    req.body.fk_estudianteId= req.usuarioId;
    req.body.fk_estadoId= 1;
    const foros= await foro.create(req.body);
    res.json(foros);
});

router.put('/identificador/:id', cors(), async (req, res) =>{
    req.body.foroPassword= bcrypt.hashSync(req.body.foroPassword,10);
    await foro.update(req.body,{
        where: { foroId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/identificador/:id', async (req, res) =>{
    await foro.destroy(req.body,{
        where: { foroId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;