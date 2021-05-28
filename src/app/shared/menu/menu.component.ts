import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent  {
  
  get user(){
    return this.authServices.User;
  }
  constructor(private authServices: ServiceService){}

 
}
