const usuario={
    usuarioNombreUemail: '',
    usuarioPassword: ''
}

document.addEventListener("DOMContentLoaded", ()=>{
    capturaDatosLogeo();
});

function capturaDatosLogeo(){
    const nombreUemail = document.querySelector('#DatoLogin')
    nombreUemail.addEventListener('input', e =>{
      usuario.usuarioNombreUemail = e.target.value.trim();
      console.log(usuario)
    })
   
    const contraseña= document.querySelector('#passwordLogin')
    contraseña.addEventListener('input', e =>{
      usuario.usuarioPassword= e.target.value.trim();
      console.log(usuario)
    })
}

async function traerDatosLog(){
    try{

    }catch(error){
        console.log(error)
    }
}