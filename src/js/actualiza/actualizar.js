document.addEventListener("DOMContentLoaded", ()=>{
    iniciarPaginaAct();   
});

function iniciarPaginaAct(){
    traerDatos();
};

async function traerDatos(){
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiantes/';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json();    
        console.log(data)
        data.forEach(element => {
            const {estudianteNombre}=element;
            const nombre= document.querySelector('#nombreActualizacion');  
            nombre.value=estudianteNombre;
              
        });
    }catch (error) {
        console.log(error)
    }
    
}