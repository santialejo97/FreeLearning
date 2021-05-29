import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Login } from '../../proyecto/interfaces/usuario.interfeces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  stateOptions: any[] = [];

  login: Login={
    Email: '',
    Password:''
  }
  tipo!: string;
  
  value1: string = '1';

  constructor(private services:ServiceService, private router: Router ) {}

  ngOnInit() {
    this.stateOptions = [
      { label: 'Estudiante', value: '1' },
      { label: 'Empleado', value: '2' },
    ];
  }

  ingreso(){
    if(this.tipo == '1'){
      this.services.postLoginEstudiante(this.login).subscribe(respo=>{
        if(respo){
          this.services.mostrarSnackBar('Bienvenido')
          this.router.navigate(['/comunidad/home'])
         }else{
          this.services.mostrarSnackBar('Validar Información')
         }
      })
    }else if(this.tipo == '2'){
      this.services.postLoginEmpleados(this.login).subscribe(respo=>{
        if(respo.success){
          this.services.mostrarSnackBar('Bienvenido')
          this.router.navigate(['/comunidad/home'])
         }else{
          this.services.mostrarSnackBar('Validar Información')
         }
      })
    }else{
      alert('Error tipo no valido')
    }
  }
  

}
