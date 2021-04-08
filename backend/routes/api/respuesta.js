const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {respuesta} = require('../../db');
const cors = require('cors');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) =>{
    const respuestas= await respuesta.findAll();
    res.json(respuestas);
});

router.get('/:id', cors(), async (req, res) =>{
    const respuestas= await respuesta.findOne({
        where: { respuestaId: req.params.id }
    });
    res.json(respuestas);
});

router.post('/', cors(), async (req, res) =>{
    req.body.respuestaPassword= bcrypt.hashSync(req.body.respuestaPassword,10);
    const respuestas= await respuesta.create(req.body);
    res.json(respuestas);
});

router.put('/:id', cors(), async (req, res) =>{
    console.log(req.params);
    req.body.respuestaPassword= bcrypt.hashSync(req.body.respuestaPassword,10);
    await respuesta.update(req.body,{
        where: { respuestaId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await respuesta.destroy(req.body,{
        where: { respuestaId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;