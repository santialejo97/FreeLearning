import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { UsuarioComponent } from '../auth/usuario/usuario.component';
import { EstadoComponent } from './pages/estados/estado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ForoComponent } from './pages/foro/foro.component';
import { EstadoPipe } from '../estado.pipe';
import { DatosComponent } from './pages/datos/datos.component';
import { ComunidadRoutingModule } from './comunidad-routing.module';
import { PublicationsComponent } from './pages/publications/publications.component';
import { RespuestaComponent } from './pages/respuesta/respuesta.component';

@NgModule({
  declarations: [
    HomeComponent,
    EstadoComponent,
    ForoComponent,
    EstadoPipe,
    DatosComponent,
    PublicationsComponent,
    RespuestaComponent,
    
  ],
  imports: [
    CommonModule, 
    PrimengModule, 
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ComunidadRoutingModule
  ],
})
export class ComunidadModule {}
