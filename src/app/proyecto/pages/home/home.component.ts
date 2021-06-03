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

  info: Tarjeta[]=[];

  get user(){
    return this.authServices.User;
  }

  constructor(private authServices: ServiceService) { }

  ngOnInit(){
    this.authServices.getForosGeneral().subscribe(resp=>{
      resp.forEach(card=>{
        this.authServices.getTemasId(card.fk_temaId!).subscribe(tema=>{
          this.authServices.getEstudianteId(card.fk_estudianteId!).subscribe(user=>{
            let tarjeta={
              user: user.estudianteNombre,
              imagen: tema.temaImagen,
              pregunta: card.foroDescripcion,
              tema: tema.temaNombre,
            }
            this.info.push(tarjeta);
          })
        });
      })
    })
    console.log(this.info)
    
  }

}
