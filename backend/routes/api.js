const router = require('express').Router();

const apiUsuariosRouter= require('./api/usuarios');
router.use('/usuarios',apiUsuariosRouter);

module.exports= router;