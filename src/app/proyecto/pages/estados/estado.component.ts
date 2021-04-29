import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../../interfaces/usuario.interfeces';
import { ServiceService } from '../../../services/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './estado.component.html',
  styles: [],
})
export class EstadoComponent implements OnInit {

  estado: boolean= true;
  estudiantes: Estudiante[]=[];

  constructor(private service: ServiceService) {}

  @ViewChild('miFormulario') miFormulario!: NgForm;

  ngOnInit(): void {
   this.service.getEstudiante().subscribe(resp=>{
     this.estudiantes= resp
     
     console.log(this.estudiantes)
   })
   
  }
}
