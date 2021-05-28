import { Component, OnInit  } from '@angular/core';
import { Estudiante, Carrera, Empleado } from '../../proyecto/interfaces/usuario.interfeces';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudiante',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {

  public usuario: Estudiante = {
    estudianteNombre: '',
    estudianteEmail: '',
    estudiantePassword: '',
    estudiantePoliticaDatos: 0,
    fk_carreraId: 0
  };

  public empleado: Empleado={
    empleadoNombre:'',
    empleadoEmail:'',
    empleadoPassword:'',
    empleadoPoliticaDatos: 0
  }

  politicas: boolean= false;
  public carreras:Carrera[]=[];
  selector!: Carrera;

  constructor(private servicio: ServiceService, private router: Router ) {}

  ngOnInit(): void {
    this.servicio.getCarrera().subscribe(resp =>{
      this.carreras= resp
    })
  }

  agregarEstudiante() {
    if(this.politicas){
      this.usuario.estudiantePoliticaDatos= 1
    }else{
      this.usuario.estudiantePoliticaDatos= 0
    }
    this.usuario.fk_carreraId= this.selector.carreraId;
    this.servicio.postEstudiante(this.usuario).subscribe(resp =>{
      this.servicio.mostrarSnackBar('Estudiante Creado') //poner sankBar 
      this.router.navigate(['/auth/login'])
    })
  }

  agregarEmpleado() {
    if(this.politicas){
      this.empleado.empleadoPoliticaDatos= 1
    }else{
      this.empleado.empleadoPoliticaDatos= 0
    }

    this.servicio.postEmpleado(this.empleado).subscribe(resp=>{
      this.servicio.mostrarSnackBar('Empleado Creado')//poner sankBar 
      this.router.navigate([''])
    })
    
  }

  
}
