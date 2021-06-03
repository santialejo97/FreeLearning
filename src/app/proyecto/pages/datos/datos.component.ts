import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cambio } from '../../interfaces/usuario.interfeces';
import { ServiceService } from '../../../services/service.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  title: string='Actualizacion de Informaciòn';
  _ObjetoCambio: Cambio={
    estudianteNombre:'',
    estudianteEmail:'',
    estudiantePassword:''
  }

  get user(){
    return this.authService.User;
  }

  miFormulario: FormGroup=this.fb.group({
    user:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.minLength(3)]],
    password:['', [Validators.required, Validators.minLength(3)]]
  });

  
  
  constructor(private fb: FormBuilder, private authService: ServiceService) { }

  ngOnInit(): void {
    const id= this.user.id;
    this.authService.getEstudianteId(id).subscribe(resp=>{
      this.miFormulario.reset({
        user: resp.estudianteNombre,
        email: resp.estudianteEmail,
        password: resp.estudiantePassword
      })
    })
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors &&  this.miFormulario.controls[campo].touched
  }

  cambios(){
    const id= this.user.id.toString();
    this._ObjetoCambio.estudianteNombre= this.miFormulario.get('user')?.value ;
    this._ObjetoCambio.estudianteEmail= this.miFormulario.get('email')?.value ;
    this._ObjetoCambio.estudiantePassword= this.miFormulario.get('password')?.value ;
    console.log(this._ObjetoCambio)
    this.authService.putEstudianteId(id , this._ObjetoCambio).subscribe( resp => {
      console.log(resp);
    })
  }
}
