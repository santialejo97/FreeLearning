const jwt= require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next)=>{

    if(!req.headers['user-token']){
        return res.json({ 
            ok: false,
            error: 'Necesitas incluir el user-token en la cabecera'
        });
    }
    const userToken = req.headers['user-token'];
    let payload={};
    try{
        payload = jwt.decode(userToken,'frase secreta');
        // console.log(payload);
    }catch(err){
        return res.json({
            ok: false, 
            error: 'El token es incorrecto '+userToken
        });
    }

    if(payload.expiredAd < moment.unix()){
        return res.json({ 
            ok: false,
            error: 'El token ha expirado'
        });
    }

    req.usuarioId= payload.usuarioId;
    
    next();
}

module.exports={
    checkToken:checkToken
}