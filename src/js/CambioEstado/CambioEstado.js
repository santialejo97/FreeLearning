const tabla = document.querySelector('#tablaEstado')
var estado;

document.addEventListener("DOMContentLoaded", () => {
    cargarTabla();
});

async function cargarTabla(){
    
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiantes/';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json(); 
        console.log(data) 
        
        info = data.map(e => {
            const {estudianteId, estudianteNombre, estudianteEmail, fk_estadoId} = e;

            if(fk_estadoId === 1){
                estado = 'Activo'
                estado2 = 'Inactivo'
            }else if(fk_estadoId === 2){
                estado = 'Inactivo'
                estado2 = 'Activo'
            }    

            return `<tr><td>${estudianteId}</td><td>${estudianteNombre}</td><td>${estudianteEmail}</td><td><select><option>${estado}</option><option>${estado2}</option></select></td><td><button class='btn btn-success' Onclick = 'CambiarEstado()' id='botonEstado'>Cambiar estado</button></td></tr>`
        });

        tabla.innerHTML = info

    }catch(error){
        console.log(error)
    }
}

function CambiarEstado(){
    console.log('Cambio del estado')
}