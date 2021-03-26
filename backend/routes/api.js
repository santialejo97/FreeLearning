const router = require('express').Router();

const apiEstudiantesRouter= require('./api/estudiante');
const apiEmpleadosRouter= require('./api/empleado');
const apiCarrerasRouter= require('./api/carrera');
const apiPublicacionesRouter= require('./api/publicacion');
const apiForosRouter= require('./api/foro');
const apiRespuestasRouter= require('./api/respuesta');

router.use('/estudiantes',apiEstudiantesRouter);
router.use('/empleados',apiEmpleadosRouter);
router.use('/carreras',apiCarrerasRouter);
router.use('/publicaciones',apiPublicacionesRouter);
router.use('/foros',apiForosRouter);
router.use('/respuestas',apiRespuestasRouter);

module.exports= router;