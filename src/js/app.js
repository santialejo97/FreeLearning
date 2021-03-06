// paginado de los formularios
let pagina=1;

// objeto que se envia a la base de datos 
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

  // enviar objeto 
  enviarObjeto();

  // asigna la clase de mostrarseccion actual en la pagina 
  mostrarSeccion();

  // cambiamos la seccion al formulario elegido
  cambiarSeccion();

  // Capturamos la informacion de formulario estudiantes
  capturaDatosEstudiante();

  capturaDatosEmpleado();
}

// se trae infromacion de la base dedatos y se llena el selector 
async function llenarSelector(){
  // se conecta a la tabla de carreras
  const urlcarrera= 'http://localhost:3000/api/carreras/';
  try {
    const carrera= await fetch(urlcarrera,{method:'GET'})
    const data = await carrera.json();
    
  // se selecciona el select  
    const selector= document.querySelector('#carrera')

  // se recorrer el arreglo de las carreras
  data.forEach(carrera =>{
    const {carreraNombre, carreraId}= carrera;

  //se crear elemneto option para agregar al select y se le asigna una carrera de el arreglo
    const option = document.createElement('OPTION');
    option.classList.add('opcionCarrera')
    option.value= carreraId;
    option.innerHTML=carreraNombre;

  // se agregar el option de la carrera a el selector 
    selector.appendChild(option)
  })
  } catch (error) {
    console.log(error)
  }
 
}

// funcion de conexion de api para el envio de estudiantes
 function conectarApi(){
  //  se conecta a el BackEnd y se realiza un metodo POST
    try {
      let tabla;
      let url ;
      if(pagina === 1){
        tabla='estudiantes'
        url=`http://localhost:3000/api/${tabla}/`
        console.log(usuario)
        fetch(url,{method:'POST',
        body: JSON.stringify({
          estudianteNombre:usuario.usuarioNombre,
          estudianteEmail:usuario.usuarioEmail,
          estudiantePassword: usuario.usuarioPassword,
          estudiantePoliticaDatos: usuario.usuarioPoliticaDatos,
          fk_carreraId: usuario.usuarioCarrera
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)})
      }else if(pagina === 2){
        tabla='empleados'
        url=`http://localhost:3000/api/${tabla}/`
        console.log(usuario)
        fetch(url,{method:'POST',
        body: JSON.stringify({
          empleadoNombre:usuario.usuarioNombre,
          empleadoEmail:usuario.usuarioEmail,
          empleadoPassword: usuario.usuarioPassword,
          empleadoPoliticaDatos: usuario.usuarioPoliticaDatos,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)})
      }
     
    } catch (error) {
        console.log(error)
    }
}

// funcion de captura de datos 
function capturaDatosEstudiante(){
  // Capturamos el dato de nombre 
  const nombreInput= document.querySelector('#nombre')
  nombreInput.addEventListener('input', (e)=>{
    usuario.usuarioNombre= e.target.value.trim();
    console.log(usuario) 
  })
  
  // Capturamos el dato de Carrera Universidad
  const carreraSelector=document.querySelector('#carrera');
  carreraSelector.addEventListener('click', e=>{
  usuario.usuarioCarrera= parseInt(e.target.value);
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

}

function capturaDatosEmpleado(){
 const nombreEmpleado = document.querySelector('#nombreempleado');
 nombreEmpleado.addEventListener('input', e =>{
   usuario.usuarioNombre = e.target.value.trim();
 })

 const correoEmpleado= document.querySelector('#emailempleado');
 correoEmpleado.addEventListener('input', e =>{
   usuario.usuarioEmail= e.target.value.trim();
 })

 const contraseñaEmpleado= document.querySelector('#passwordempleado');
 contraseñaEmpleado.addEventListener('input', e =>{
   usuario.usuarioPassword= e.target.value.trim();
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

  if(pagina=== 1){
    const formulario= document.querySelector('.mensaje1');
  formulario.appendChild(alerta);
  }else{
    const formulario2= document.querySelector('.mensaje2');
  formulario2.appendChild(alerta);
  }
  setTimeout(()=>{
    alerta.remove();
  }, 5000)

}

// funcion de validacion de las politicas 
function politicasAceptacion(){
  const politicas = document.getElementById('opt-in').checked;
  console.log(politicas);
  if(politicas){
    usuario.usuarioPoliticaDatos=1;
  }else{
    usuario.usuarioPoliticaDatos=0;
  }
}

// validacion de campos obligatorios 
function validacionCampos(){
  if(pagina === 1){
  if(usuario.usuarioNombre === '' || usuario.usuarioCarrera === '' || usuario.usuarioEmail === '' 
  || usuario.usuarioPassword === ''){
   mostrarAlerta("Es necesario llenar nombre, contraseña, carrera y correo ", 'error');
   console.log(usuario)
  }else{
   mostrarAlerta("Usuario Creado Correctamente", 'correcto');
   conectarApi();
   console.log('estoy enviando ....')
   console.log(usuario)
  }
  }else{
    if(usuario.usuarioNombre === '' || usuario.usuarioEmail === '' 
  || usuario.usuarioPassword === ''){
   mostrarAlerta("Es necesario llenar nombre, contraseña y correo ", 'error');
   console.log(usuario)
   console.log(pagina)
  }else{
   mostrarAlerta("Usuario Creado Correctamente", 'correcto');
   conectarApi();
   console.log(pagina)
   console.log('estoy enviando ....')
   console.log(usuario)
  }
  } 
}

// de ejecucion de el envio del usuario 
function enviarObjeto(){
  const boton = document.querySelector('#envio')
  boton.addEventListener('click',(e)=>{
// se valida la informacion que se captura 
if(pagina === 1){
  console.log(pagina)
   // Capturamos la informacion de formulario estudiantes
   capturaDatosEstudiante();
}else{
  console.log(pagina)
  // Capturamos la informacion de formulario empleado
  capturaDatosEmpleado();
}
    console.log(usuario)
// validamos la aceptacion de las politicas 
 politicasAceptacion();
 //validacion de los campos y la ejecucion con el API
 validacionCampos();
})
}

