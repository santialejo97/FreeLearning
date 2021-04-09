const router = require('express').Router();
const middlewares = require('./middlewares');

const apiEstudiantesRouter= require('./api/estudiante');
const apiEmpleadosRouter= require('./api/empleado');
const apiCarrerasRouter= require('./api/carrera');
const apiPublicacionesRouter= require('./api/publicacion');
const apiForosRouter= require('./api/foro');
const apiRespuestasRouter= require('./api/respuesta');
//const apiLoginRouter= require('./api/login');

router.use('/estudiantes', apiEstudiantesRouter);
router.use('/empleados', apiEmpleadosRouter);
router.use('/carreras',apiCarrerasRouter);
router.use('/publicaciones', middlewares.checkToken, apiPublicacionesRouter);
router.use('/foros', middlewares.checkToken, apiForosRouter);
router.use('/respuestas', middlewares.checkToken, apiRespuestasRouter);
//router.use('/login',apiLoginRouter);

module.exports= router;