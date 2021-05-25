import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styles: [
    `.example-header-image {
      background-image: url('https://holatelcel.com/wp-content/uploads/2020/03/deadpool.jpg');
      background-size: cover;
    }`
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
