const router = require('express').Router();

const apiEstudiantesRouter= require('./api/estudiantes');
const apiEmpleadosRouter= require('./api/empleados');
const apiCarrerasRouter= require('./api/carreras');

router.use('/estudiantes',apiEstudiantesRouter);
router.use('/empleados',apiEmpleadosRouter);
router.use('/carreras',apiCarrerasRouter);

module.exports= router;