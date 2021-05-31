const { ConsoleReporter } = require('jasmine');
const {estudiante} = require('../../db');
const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');


router.get('/',async(req, res)=>{

    const {usuarioId}= req;
    

    const dbUser = await estudiante.findOne({
        where: {
            estudianteid: usuarioId
         }
    });


    if(!dbUser){
        return res.status(401).json({
            ok: false,
            msg: 'Este usuario no existe'
        })
    }

    const token = await createToken(dbUser);
    console.log(token);
    return res.status(200).json({
        ok:true,
        token: token,
        name: dbUser.estudianteNombre,
        msg: 'Usuario renovado'
    })

})

const createToken =(estudiantes)=>{
    const payload = {
        usuarioId: estudiantes.estudianteId,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta');
}

module.exports= router;