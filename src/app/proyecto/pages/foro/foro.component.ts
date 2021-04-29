import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styles: [
  ]
})
export class ForoComponent implements OnInit {

  @ViewChild("miForo") form!:NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  crear(){
    console.log(this.form.controls.descripcion.value)
  }

}
