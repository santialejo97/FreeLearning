const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {estudiante} = require('../../db');
const cors = require('cors');
const {check,validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) => {
    const estudiantes = await estudiante.findAll();
    res.json(estudiantes);
});

router.post('/login', [
    check('Email', 'El campo email es obligatorio').isEmail(),
    check('Password', 'El campo contraseña es obligatorio').not().isEmpty()
     ], cors(), async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                errores: errors.array()})
        }

    const body = req.body;
    let estudiantes = await estudiante.findOne({
         where: {
            estudianteEmail: body.Email
         }
    });
    if(estudiantes){
        const iguales = bcrypt.compareSync(body.Password, estudiantes.estudiantePassword);
        
        if(iguales){
        res.json({
            ok: true,
            id: estudiantes.estudianteId,
            name: estudiantes.estudianteNombre, 
            success: createToken(estudiantes)
        });
        }else{
        res.json({ 
            ok: false,
            error: 'Error en constraseña'});
        }
    }else{
        res.json({
            ok: false,
            error: 'Error en usuario y/o constraseña'});
    }
    
});


router.get('/:id', cors(), async (req, res) => {
    const estudiantes = await estudiante.findOne({
        where: {
            estudianteId: req.params.id
        }
    });
    res.json(estudiantes);
});

router.post('/', cors(), async (req, res) => {
    req.body.estudiantePassword = bcrypt.hashSync(req.body.estudiantePassword, 10);
    const estudiantes = await estudiante.create(req.body);
    const token = await createToken(estudiante);
    res.json({
        ok: true,
        estudiantes,
        token: token
    });
});

router.put('/:id', cors(), async (req, res) => {
    console.log(req.params);
    req.body.estudiantePassword = bcrypt.hashSync(req.body.estudiantePassword, 10);
    await estudiante.update(req.body, {
        where: {
            estudianteId: req.params.id
        }
    });
    res.json({
        success: 'se ha modificado'
    });
});

router.delete('/:id', async (req, res) => {
    await estudiante.destroy(req.body, {
        where: {
            estudianteId: req.params.id
        }
    });
    res.json({
        success: 'se ha eliminado'
    });
});

const createToken =(estudiantes)=>{
    const payload = {
        usuarioId: estudiantes.estudianteId,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}
module.exports = router;