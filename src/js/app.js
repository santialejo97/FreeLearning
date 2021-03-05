const { sync } = require("gulp-sass");

const usuario={
  usuarioNombre: '',
  usuarioEmail: '',
  usuarioPassword: '',
  usuarioPoliticaDatos: '',
  usuarioCarrera: ''
}

document.addEventListener("DOMContentLoaded", ()=>{
    iniciarPagina();   
});

function iniciarPagina(){

  //LLenar selector de las carrera de la Universidad
  llenarSelector();

  // Capturamos la informqacion de formulario 
  capturaDatos();

  // enviar objeto 
  enviarObjeto();
}

async function llenarSelector(){
  // se conecta a la tabla de carreras
  const urlcarrera= 'http://localhost:3000/api/carreras/';
  try {
    const carrera= await fetch(urlcarrera,{method:'GET'})
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      const {carreraNombre}=data;
    })
  } catch (error) {
    console.log(error)
  }
  // // se selecciona el select 
  // const selector= document.querySelector('#carrera')
  // // se recorrer el arreglo de las carreras
  // carreraNombre.forEach(carrera =>{
  //   //se crear elemneto option para agregar al select y se le asigna una carrera de el arreglo
  //   const option = document.createElement('OPTION');
  //   option.classList.add('opcionCarrera')
  //   option.value= carrera
  //   option.innerHTML=carrera;
  // // se agregar el option de la carrera a el selector 
  //   selector.appendChild(option)
  // })
}

 function conectarApi(){
  //  se conecta a el BackEnd y se realiza un metodo POST
    try {
      const url = 'http://localhost:3000/api/estudiantes/'
      console.log(usuario)
      fetch(url,{method:'POST',
      body: JSON.stringify({
        estudianteNombre:  usuario.usuarioNombre,
        estudianteEmail:usuario.usuarioEmail,
        estudiantePassword: usuario.usuarioPassword
        // estudiantePoliticaDatos: type.INTEGER,
        // fk_carreraId: type.INTEGER,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
    
  })
  
  // Capturamos el dato de Carrera Universidad
  const carreraSelector=document.querySelector('#carrera').value;
    usuario.usuarioCarrera= carreraSelector;
    
  

  // Capturamos el correo del usuario
  const correoInput=document.querySelector('#email');
  correoInput.addEventListener('input',(e)=> {
    usuario.usuarioEmail=e.target.value.trim();
    
  })

  // Capturamos la contraseña del usuario
  const passInput= document.querySelector('#password');
  passInput.addEventListener('input', (e)=>{
    usuario.usuarioPassword=e.target.value.trim();
    
  })  
}

// funcion de las alarmas
function mostrarAlerta(mensaje , tipo){
  const alerta= document.createElement('DIV');
  alerta.textContent= mensaje;
  alerta.classList.add('alerta')
  if(tipo == 'error'){
    alerta.classList.add('error');
  }else{
    alerta.classList.add('creado');
  }
  const formulario= document.querySelector('.formulario_usuarios');
  formulario.appendChild(alerta);

  setTimeout(()=>{
    alerta.remove();
  }, 3000)

}

function enviarObjeto(){
  const boton = document.querySelector('#envio')
  boton.addEventListener('click',()=>{
 //   validacion de los campos y la ejecucion con el API
 if(usuario.usuarioNombre == ''){
  mostrarAlerta("Todos los Campos son obligatorios", 'error');
 }else{
  mostrarAlerta("Usuario Creado Correctamente", 'correcto');
  conectarApi();
  console.log('estoy enviando ....')
 }
})
}

