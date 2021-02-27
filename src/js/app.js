const usuario={

}

document.addEventListener("DOMContentLoaded", ()=>{
    iniciarApp();   
});

function iniciarApp(){
//   conexion de Api
  conectarApi();

  // Capturamos la informqacion de formulario 
  capturaDatos();
}

async function conectarApi(){
    try {
        
    } catch (error) {
        
    }
}
function capturaDatos(){
  // capturamos el dato de nombre 
  const nombreInput= document.querySelector('#nombre')
  nombreInput.addEventListener('input', (e)=>{
    const value= e.target.value.trim();
    console.log(value)
  })
  
  // capturamos el dato de Carrera Universidad
  const carreraInput=document.querySelector('#carrera');
  carreraInput.addEventListener('input', (e)=>{
    const value= e.target.value.trim();
    console.log(value)
  })

  // capturamos el correo del usuario
  const correoInput=document.querySelector('#email');
  correoInput.addEventListener('input',(e)=> {
    const value=e.target.value.trim()
     console.log(typeof value)
  })

  // capturamos la contraseña del usuario
  const passInput= document.querySelector('#password');
  passInput.addEventListener('input', (e)=>{
    const value =e.target.value.trim();
  })

  // Capturamos la fecha de nacimiento 
  const fechaInput= document.querySelector('#fecha');
  fechaInput.addEventListener('input', (e)=>{
    const value =new Date(e.target.value);
    console.log(typeof value)
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

