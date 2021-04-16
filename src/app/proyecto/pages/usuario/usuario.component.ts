import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interfeces';

@Component({
  selector: 'app-estudiante',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  checked: string = 'false';
  public usuario: Usuario = {
    nombre: '',
    email: '',
    contrasecha: '',
    politica: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  agregarEstudiante() {
    console.log('Soy un nuevo estudiante');
  }

  agregarEmpleado() {
    console.log(this.usuario);
  }
}
