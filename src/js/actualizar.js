function alertar(){
    alert("Buenas...");
    traerDatos();
}

async function traerDatos(){
    try{
        const urlestudiante = 'http://localhost:3000/api/estudiante';
        const estudianteact = await fetch(urlestudiante, {method:'GET'})
        const data = await estudianteact.json();
        console.log(data)
    }catch (error) {
        console.log(error)
    }
}