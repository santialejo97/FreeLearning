import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Crear Cuenta',
        icon: 'pi pi-user',
        routerLink: 'creacion',
      },
      {
        label: 'Cambio Estados',
        icon: 'pi pi-lock-open',
        routerLink: 'estado'
      },
      {
        label: 'Grupos',
        icon: 'pi pi-comments',
        items: [
          {
            label: 'Espacio1',
          },
        ],
      },
      {
        label: 'Foros',
        icon: 'pi pi-comment',
        routerLink: 'foro'
      }
    ];
  }
}
