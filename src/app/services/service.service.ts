import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Carrera, Estudiante, Empleado, Login, Response, User, Foro, Cambio, Temas, Respuesta } from '../proyecto/interfaces/usuario.interfeces';

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

  getTemas(): Observable<Temas[]>{
    return this.http.get<Temas[]>(`${this.urlBase}/temas/`);
  }

  getTemasId(id: number): Observable<Temas>{
    return this.http.get<Temas>(`${this.urlBase}/temas/${id}`);
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

  getEstudianteId(id: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.urlBase}/estudiantes/${id}`)
  }

  putEstudianteId(id: string, user:Cambio): Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.urlBase}/estudiantes/${id}`, user)
  }

  //login

  postLoginEstudiante(user:Login): Observable<boolean>{
    return this.http.post<Login>(`${this.urlBase}/estudiantes/login`, user)
          .pipe(
            tap(({ok, success}) =>{
              if(ok){
                localStorage.setItem('token', success!)
              }
            }),
            map(resp => resp.ok!),
            catchError(err => of(false))
          )
  }

  postLoginEmpleados(user:Login): Observable<Login>{
    return this.http.post<Login>(`${this.urlBase}/empleados/login`, user)
  }

  postForos(foro: Foro){
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.post<Foro>(`${this.urlBase}/foros`, foro, {headers})
            .pipe(
              tap(resp=> {
                console.log(resp);
              })
            )
  }

  getForos(): Observable<Foro[]>{
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Foro[]>(`${this.urlBase}/foros/creador/`, {headers});
  }

  getForosId(id: number): Observable<Foro>{
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Foro>(`${this.urlBase}/foros/identificador/${id}`, {headers});
  }
  
  getForosGeneral(): Observable<Foro[]>{
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Foro[]>(`${this.urlBase}/foros/`, {headers});
  }
  getRespuesta(id: number):Observable<Respuesta[]>{
    const headers= new HttpHeaders()
    .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Respuesta[]>(`${this.urlBase}/respuestas/foro/${id}`, {headers})
  }

  postRespuesta(respuesta: Respuesta):Observable<Respuesta>{
    const headers= new HttpHeaders()
    .set('user-token', localStorage.getItem('token') || '')
    return this.http.post<Respuesta>(`${this.urlBase}/respuestas/`, respuesta ,{headers})
  }

  validarToken(): Observable<boolean>{
    const headers= new HttpHeaders()
              .set('user-token', localStorage.getItem('token') || '')
    return this.http.get<Response>(`${this.urlBase}/renew/`,{ headers })
                .pipe(
                  tap(resp=>{
                    if(resp.ok === true){
                      localStorage.setItem('token', resp.token)
                      this._User={
                        id: resp.usuarioId!,
                        name: resp.name!,
                        msg: resp.msg!
                      } 
                    }
                  }),
                  map(resp =>{
                    return resp.ok;
                  }),
                  catchError(err=> of(false))
                )
  }

  logOut(){
    localStorage.removeItem('token');
  }
}
