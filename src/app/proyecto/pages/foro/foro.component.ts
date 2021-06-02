import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../../services/service.service';
import { Foro, Temas } from '../../interfaces/usuario.interfeces';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styles: []
})
export class ForoComponent implements OnInit {

  @ViewChild("miForo") form!:NgForm;
  foro!: Foro;
  foros!: Foro[];
  imagen!: string;
  temas: Temas[]=[];
  
  get User(){
    return this.authService.User;
  }
  
  constructor(private authService: ServiceService) { }

  ngOnInit() {
    this.authService.getTemas().subscribe(resp => {
      resp.forEach(tema =>{
        this.temas.push(tema);
      })
    })
    this.authService.getForos().subscribe(resp=> {
      this.foros= resp;
    })
    console.log(this.temas);
  }

  crear(){
    this.foro={
      foroDescripcion: this.form.controls.descripcion.value
    }
    this.authService.postForos(this.foro).subscribe(resp=>{
      
    })
  }

}
