function alertar(){
    alert("Buenas...");
    traerDatos();
}

async function traerDatos(){
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiantes';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json();    
        console.log(data)
        data.forEach(element => {
            const {estudianteEmail, estudianteNombre, estudiantePassword}=element;
            console.log(estudianteEmail)
        });
    }catch (error) {
        console.log(error)
    }
    
}