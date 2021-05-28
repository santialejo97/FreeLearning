import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Carrera, Estudiante, Empleado, Login, Response, User } from '../proyecto/interfaces/usuario.interfeces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlBase: string= environment.baseUrl;
  private _User!: User;

  get User(){
    return {...this._User}
  }

  constructor(private http: HttpClient, private snackBar:MatSnackBar) { }

  mostrarSnackBar(mensaje: string): void{
    this.snackBar.open(mensaje, 'Ok!',{
      duration: 2000
    })
  }

  getCarrera(): Observable<Carrera[]>{
    return this.http.get<Carrera[]>(`${this.urlBase}/carreras`);
  }
  // Registro 
  postEstudiante(user: Estudiante){
    return this.http.post<Response>(`${this.urlBase}/estudiantes`, user)
          .pipe(
            tap(({ok,token})=>{
              console.log(ok, token);
            })
          )
  }

  postEmpleado(user: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(`${this.urlBase}/empleados`, user)
  }

  getEstudiante(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.urlBase}/estudiantes`)
  }

  //login

  postLoginEstudiante(user:Login){
    return this.http.post<Login>(`${this.urlBase}/estudiantes/login`, user)
          .pipe(
            tap(({ok, success}) =>{
              if(ok){
                localStorage.setItem('token', success!)
              }
            }),
            map(resp => resp.ok),
            catchError(err => err.error.error)
          )
  }

  postLoginEmpleados(user:Login): Observable<Login>{
    return this.http.post<Login>(`${this.urlBase}/empleados/login`, user)
  }

  validarToken(): Observable<boolean>{
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Response>(`${this.urlBase}/renew/`,{ headers })
                .pipe(
                  map(resp =>{
                    localStorage.setItem('token', resp.token)
                    this._User={
                      name: resp.name!,
                      msg: resp.msg!
                    } 
                    return resp.ok;
                  }),
                  catchError(err=> of(false))
                )
  }

}
