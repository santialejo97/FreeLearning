const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {
    empleado
} = require('../../db');
const cors = require('cors');
const {
    check,
    validationResult
} = require('express-validator');

const moment = require('moment');
const jwt = require('jwt-simple');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) => {
    const empleados = await empleado.findAll();
    res.json(empleados);
});

router.post('/login', [
    check('Email', 'El campo email es obligatorio').isEmail(),
    check('Password', 'El campo contraseña es obligatorio').not().isEmpty()
     ], cors(), async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errores: errors.array()})
        }

    const body = req.body;
    let empleados = await empleado.findOne({
         where: {
            empleadoEmail: body.Email
         }
    });
    if(empleados){
        const iguales = bcrypt.compareSync(body.Password, empleados.empleadoPassword);
        
        if(iguales){
        res.json({
            id: empleados.empleadoId,
            name: empleados.empleadoNombre, 
            success: createToken(empleados)
        });
        }else{
        res.json({ error: 'Error en constraseña'});
        }
    }else{
        res.json({ error: 'Error en usuario y/o constraseña'});
    }
    
});

const createToken =(empleados)=>{
    const payload = {
        usuarioId: empleados.empleadoId,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}

router.get('/:id', cors(), async (req, res) => {
    const empleados = await empleado.findOne({
        where: {
            empleadoId: req.params.id
        }
    });
    res.json(empleados);
});

router.post('/', cors(), async (req, res) => {
    req.body.empleadoPassword = bcrypt.hashSync(req.body.empleadoPassword, 10);
    const empleados = await empleado.create(req.body);
    res.json(empleados);
});

router.put('/:id', cors(), async (req, res) => {
    console.log(req.params);
    req.body.empleadoPassword = bcrypt.hashSync(req.body.empleadoPassword, 10);
    await empleado.update(req.body, {
        where: {
            empleadoId: req.params.id
        }
    });
    res.json({
        success: 'se ha modificado'
    });
});

router.delete('/:id', async (req, res) => {
    await empleado.destroy(req.body, {
        where: {
            empleadoId: req.params.id
        }
    });
    res.json({
        success: 'se ha eliminado'
    });
});
module.exports = router;