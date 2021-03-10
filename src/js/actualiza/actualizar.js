const usuarioActualizado={
    usuarioNombre: '',
    usuarioEmail: '',
    usuarioPassword: ''
  }

document.addEventListener("DOMContentLoaded", ()=>{
    iniciarPaginaAct();   
});

function iniciarPaginaAct(){
    traerDatos();
    capturaDatosActualizar();
    Actualizar();
};



async function traerDatos(){
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiantes/';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json();    
        
        data.forEach(element => {
            const {estudianteNombre, estudianteEmail, estudiantePassword}=element;
            const nombre= document.querySelector('#nombreActualizacion');  
            nombre.value = estudianteNombre;

            const email= document.querySelector('#emailActualizacion');  
            email.value = estudianteEmail;

            const password= document.querySelector('#passwordActualizacion');  
            password.value = estudiantePassword;

            console.log(nombre)
            console.log(estudianteNombre)
              
        });
    }catch (error) {
        console.log(error)
    }
    
}

function capturaDatosActualizar(){
    const nombreEmpleado = document.querySelector('#nombreActualizacion')
    nombreEmpleado.addEventListener('input', e =>{
      usuarioActualizado.usuarioNombre = e.target.value.trim();
      console.log(usuarioActualizado)
    })
   
    const correoEmpleado= document.querySelector('#emailActualizacion')
    correoEmpleado.addEventListener('input', e =>{
      usuarioActualizado.usuarioEmail= e.target.value.trim();
      console.log(usuarioActualizado)
    })
   
    const contraseñaEmpleado= document.querySelector('#passwordActualizacion')
    contraseñaEmpleado.addEventListener('input', e =>{
      usuarioActualizado.usuarioPassword= e.target.value.trim();
      console.log(usuarioActualizado)
    })
}

async function envioactualizacion(){
    try{
        fetch('http://localhost:3000/api/estudiantes/2', {method:"PUT",
            headers:{
            'Content-type':'application/json'
            },
            body: JSON.stringify({
                estudianteNombre:usuarioActualizado.usuarioNombre,
                estudianteEmail:usuarioActualizado.usuarioEmail,
                estudiantePassword: usuarioActualizado.usuarioPassword,
              })
        })
        
        console.log(usuarioActualizado)
    }catch(error){
        console.log(error);
    }
}

function Actualizar(){
    const botonActualizar = document.querySelector('#envioactualiza');
    botonActualizar.addEventListener('click', e => {
        envioactualizacion();
    })
}

