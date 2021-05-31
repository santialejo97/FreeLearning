const router = require('express').Router();
const middlewares = require('./middlewares');

const apiEstudiantesRouter= require('./api/estudiante');
const apiEmpleadosRouter= require('./api/empleado');
const apiCarrerasRouter= require('./api/carrera');
const apiTemasRouter= require('./api/tema');
const apiPublicacionesRouter= require('./api/publicacion');
const apiForosRouter= require('./api/foro');
const apiRespuestasRouter= require('./api/respuesta');
const apiSessionRouter= require('./api/session');

router.use('/estudiantes',apiEstudiantesRouter);
router.use('/empleados', apiEmpleadosRouter);
router.use('/carreras',apiCarrerasRouter);
router.use('/temas',apiTemasRouter);


router.use('/publicaciones', middlewares.checkToken, apiPublicacionesRouter);
router.use('/foros',middlewares.checkToken, apiForosRouter); //middlewares.checkToken
router.use('/respuestas', middlewares.checkToken, apiRespuestasRouter);
router.use('/renew',middlewares.checkToken,  apiSessionRouter);

module.exports= router;