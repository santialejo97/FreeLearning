import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../../../services/service.service';
import { Respuesta } from '../../interfaces/usuario.interfeces';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styles: [
  ]
})
export class RespuestaComponent implements OnInit {

  idForo! : string;
  titulo!: string;
  responde!: string;
  respuesta!: Respuesta;
  consulta: string[]=[];

  constructor(private activatedRoute:ActivatedRoute, 
              private authService: ServiceService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe().subscribe(({id})=> this.idForo= id )
    console.log(this.idForo);
    this.authService.getForosId(parseInt(this.idForo)).subscribe(resp=> this.titulo= resp.foroDescripcion )
    this.authService.getRespuesta(parseInt(this.idForo)).subscribe(resp=>{
      resp.forEach(consu=>{
        this.consulta.push(consu.respuesta_foroDescripcion);
      })
    })
  }
  crear(){
   this.respuesta= {
    respuesta_foroDescripcion:this.responde ,
    fk_foroId: parseInt(this.idForo),
   }
   this.authService.postRespuesta(this.respuesta).subscribe(resp=> console.log(resp));
  }

}
   