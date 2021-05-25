import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cambio } from '../../interfaces/usuario.interfeces';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  title: string='Actualizacion de Informaciòn';

  miFormulario: FormGroup=this.fb.group({
    user:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.minLength(3)]],
    password:['', [Validators.required, Validators.minLength(3)]]
  });

  objetoCambio: Cambio={
    user:'',
    email:'',
    password:''
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // consumir el servicio para la informacion del usuario 
    this.miFormulario.reset({
      
    })
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors &&  this.miFormulario.controls[campo].touched
  }

  cambios(){
    const formValue= {...this.miFormulario.value};
    this.objetoCambio= formValue;
    console.log(this.objetoCambio)
  }
}
