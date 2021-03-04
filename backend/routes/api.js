const router = require('express').Router();

const apiEstudiantesRouter= require('./api/estudiantes');
const apiEmpleadosRouter= require('./api/empleados');
router.use('/estudiantes',apiEstudiantesRouter);
router.use('/empleados',apiEmpleadosRouter);

module.exports= router;