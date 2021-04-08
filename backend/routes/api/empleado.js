const router = require('express').Router();
const bcrypt = require('bcryptjs');
// import ManagementController from '../controller/ManagementController';
const {
    empleado
} = require('../../db');
const cors = require('cors');


/* router.get('/',(req, res) => {
    res.send('Entra correctamente, funciona!!');
}) */
router.get('/', cors(), async (req, res) => {
    const empleados = await empleado.findAll();
    res.json(empleados);
});

router.post('/login', cors(), async (req, res) => {
    const body = req.body;
    let empleados;
    if (!body.Email || !body.Password) {
        //mensaje de error
        empleados="empleado no encontrado";
    } else {
        //let empleado = bcrypt.hashSync(body.empleadoPassword, 10);

        empleados = await empleado.findOne({
            where: {
                EmpleadoEmail: body.Email,
                EmpleadoPassword: body.Password
            }
        });
        if(empleados === null){
            empleados="Empleado no encontrado, por favor revise los datos nuevamente";
        }
    }
    res.json(empleados);
});

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