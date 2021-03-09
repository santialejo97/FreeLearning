
async function traerDatos(){
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiantes';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json();    
        console.log(data)
        data.forEach(element => {
            const {estudianteEmail, estudianteNombre, estudiantePassword}=element;
            const nombre= document.querySelector('#nombreActualizacion');
            console.log(estudianteNombre)
            
        });
    }catch (error) {
        console.log(error)
    }
    
}