import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { Tarjeta } from '../../interfaces/usuario.interfeces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.example-header-image {
      background-image: url('https://holatelcel.com/wp-content/uploads/2020/03/deadpool.jpg');
      background-size: cover;
    }`
  ]
})
export class HomeComponent implements OnInit {

  _Info: Tarjeta[]=[];

  constructor(private authServices: ServiceService) { }

  ngOnInit(){
    this.authServices.getForosGeneral().subscribe(resp=>{
      resp.forEach(card=>{
        this.authServices.getTemasId(card.fk_temaId!).subscribe(tema=>{
          this.authServices.getEstudianteId(card.fk_estudianteId!).subscribe(user=>{
            let tarjeta={
              id: card.foroId!,
              user: user.estudianteNombre,
              imagen: tema.temaImagen,
              pregunta: card.foroDescripcion,
              tema: tema.temaNombre
            }
            this._Info.push(tarjeta);
          })
        });
      })
    })
    console.log(this._Info);
  }

}
