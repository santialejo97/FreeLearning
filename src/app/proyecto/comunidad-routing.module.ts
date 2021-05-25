import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './pages/datos/datos.component';
import { EstadoComponent } from './pages/estados/estado.component';
import { ForoComponent } from './pages/foro/foro.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicationsComponent } from './pages/publications/publications.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'estado',
            component: EstadoComponent,
        },
        {
            path: 'foro',
            component: ForoComponent
        },
        {
            path: 'datos',
            component: DatosComponent
        },
        {
          path: 'publications',
          component: PublicationsComponent
        }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ComunidadRoutingModule {}