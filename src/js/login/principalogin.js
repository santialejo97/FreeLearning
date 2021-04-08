const usuario = {
    usuarioNombreUemail: '',
    usuarioPassword: '',
    tipoUsuario: 0
}

document.addEventListener("DOMContentLoaded", () => {
    capturaDatosLogeo();
    botonloginEnvio();
});

function capturaDatosLogeo() {
    const nombreUemail = document.querySelector('#DatoLogin')
    nombreUemail.addEventListener('input', e => {
        usuario.usuarioNombreUemail = e.target.value.trim();
        console.log(usuario)
    })

    const contraseña = document.querySelector('#passwordLogin')
    contraseña.addEventListener('input', e => {
        usuario.usuarioPassword = e.target.value.trim();
        console.log(usuario)
    })

    const tipoUsuario = document.querySelector('#usuario')
    tipoUsuario.addEventListener('click', e => {
        usuario.tipoUsuario = parseInt(e.target.value);

        if (e.target.value === 'Estudiante') {
            usuario.tipoUsuario = 1
        } else {
            usuario.tipoUsuario = 2

        }

        console.log(e.target.value)
        
    })
}

async function conexion() {
    try {

        let url = ''
        if (usuario.tipoUsuario === 1) {
            url = 'http://localhost:3000/api/estudiantes/login'
        }else{
            url = 'http://localhost:3000/api/empleados/login'
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({

                Email: usuario.usuarioNombreUemail,
                Password: usuario.usuarioPassword,


            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {

                if (typeof data === 'string') {
                    console.log(data)
                } else {

                }
            })




    } catch (error) {
        console.log(error)
    }
}

function botonloginEnvio() {
    const boton = document.querySelector('#envioLogin')
    boton.addEventListener('click', () => {
        conexion();
    })
}