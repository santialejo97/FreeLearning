import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Injectable({
  providedIn: 'root'
})
export class ValidartokenGuard implements CanActivate, CanLoad {

  constructor(private authServices: ServiceService, private router: Router){}

  canActivate(): Observable<  boolean > | boolean {
    return this.authServices.validarToken()
      .pipe(
      tap(resp =>{
        if(!resp){
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
  canLoad(): Observable<  boolean >  | boolean  {
    return this.authServices.validarToken()
            .pipe(
              tap(resp =>{
                if(!resp){
                  this.router.navigateByUrl('/auth');
                }
              })
            );
    
  }
}
