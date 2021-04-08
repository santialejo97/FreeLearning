const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {publicacion} = require('../../db');
const cors = require('cors');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) =>{
    const publicacions= await publicacion.findAll();
    res.json(publicacions);
});

router.get('/:id', cors(), async (req, res) =>{
    const publicacions= await publicacion.findOne({
        where: { publicacionId: req.params.id }
    });
    res.json(publicacions);
});

router.post('/', cors(), async (req, res) =>{
    req.body.publicacionPassword= bcrypt.hashSync(req.body.publicacionPassword,10);
    const publicacions= await publicacion.create(req.body);
    res.json(publicacions);
});

router.put('/:id', cors(), async (req, res) =>{
    console.log(req.params);
    req.body.publicacionPassword= bcrypt.hashSync(req.body.publicacionPassword,10);
    await publicacion.update(req.body,{
        where: { publicacionId: req.params.id }
    });
    res.json({success: 'se ha modificado'});
});

router.delete('/:id', async (req, res) =>{
    await publicacion.destroy(req.body,{
        where: { publicacionId: req.params.id }
    });
    res.json({success: 'se ha eliminado'});
});
module.exports= router;