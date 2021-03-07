function mostrarSeccion(){
    // elimina la clase de mostrar seccion si esta en otro formulario
    const seccionAnterior = document.querySelector('.mostrarseccion');
    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrarseccion')
    }

    // Asignamos la clase de mostrar seccion en el formulario actual 
    const seccionActual = document.querySelector(`#pagina-${pagina}`);
    seccionActual.classList.add('mostrarseccion')
}

function cambiarSeccion(){
    const botones=document.querySelectorAll(".tabs button");
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) =>{
            e.preventDefault();
            pagina = parseInt(e.target.dataset.pagina)

            // se llama la funcion de mostrar seccion
            mostrarSeccion()
        })
    })
}