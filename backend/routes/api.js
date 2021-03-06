const router = require('express').Router();

const apiEstudiantesRouter= require('./api/estudiante');
const apiEmpleadosRouter= require('./api/empleado');
const apiCarrerasRouter= require('./api/carrera');

router.use('/estudiantes',apiEstudiantesRouter);
router.use('/empleados',apiEmpleadosRouter);
router.use('/carreras',apiCarrerasRouter);

module.exports= router;