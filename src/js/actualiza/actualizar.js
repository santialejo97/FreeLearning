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
        const urlestudiante = 'http://localhost:3000/api/estudiantes/2';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json(); 
        console.log(data)   
        
            const nombre= document.querySelector('#nombreActualizacion');  
            nombre.value = data.estudianteNombre;

            const email= document.querySelector('#emailActualizacion');  
            email.value = data.estudianteEmail;

            const password= document.querySelector('#passwordActualizacion');  
            password.value = data.estudiantePassword;

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

