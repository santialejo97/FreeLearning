

const usuario={
  usuarioNombre: '',
  usuarioEmail: '',
  usuarioPassword: '',
  usuarioPoliticaDatos: '' 
}

document.addEventListener("DOMContentLoaded", ()=>{
    iniciarApp();   
});

function iniciarApp(){

  // Capturamos la informqacion de formulario 
  capturaDatos();

  // enviar objeto 
  enviarObjeto();
}

 function conectarApi(){
    try {
      const url = 'http://localhost:3000/api/usuarios/'
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)})
    } catch (error) {
        console.log(error)
    }
}


function capturaDatos(){
  // Capturamos el dato de nombre 
  const nombreInput= document.querySelector('#nombre')
  nombreInput.addEventListener('input', (e)=>{
    usuario.usuarioNombre= e.target.value.trim();
    console.log(usuario)
  })
  
  // Capturamos el dato de Carrera Universidad
  const carreraInput=document.querySelector('#carrera');
  carreraInput.addEventListener('input', (e)=>{
    usuario.carrera= e.target.value.trim();
    console.log(usuario)
  })

  // Capturamos el correo del usuario
  const correoInput=document.querySelector('#email');
  correoInput.addEventListener('input',(e)=> {
    usuario.usuarioEmail=e.target.value.trim();
    console.log(usuario)
  })

  // Capturamos la contraseña del usuario
  const passInput= document.querySelector('#password');
  passInput.addEventListener('input', (e)=>{
    usuario.usuarioPassword=e.target.value.trim();
    console.log(usuario)
  })

  // Capturamos la fecha de nacimiento 
  const fechaInput= document.querySelector('#fecha');
  fechaInput.addEventListener('input', (e)=>{
    usuario.fecha =new Date(e.target.value);
    console.log(usuario)
  })
  
}

// funcion de las alarmas
function mostrarAlerta(mensaje , tipo){
  const alerta= document.createElement('DIV');
  alerta.textContent= mensaje;
  alerta.classList.add('alerta')
  if(tipo == 'error'){
    alerta.classList.add('error');
  }
  const formulario= document.querySelector('.formulario_usuarios');
  formulario.appendChild(alerta);
}

function enviarObjeto(){
  const boton = document.querySelector('#envio')
  boton.addEventListener('click',()=>{
 //   conexion de Api
  conectarApi();
  console.log('estoy enviando ....')

  })
}

