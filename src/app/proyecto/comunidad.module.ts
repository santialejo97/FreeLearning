import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EstadoComponent } from './pages/estados/estado.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ForoComponent } from './pages/foro/foro.component';
import { EstadoPipe } from '../estado.pipe';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    EstadoComponent,
    ForoComponent,
    EstadoPipe
  ],
  imports: [CommonModule, PrimengModule, FormsModule, MaterialModule],
})
export class ComunidadModule {}
