import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carrera, Estudiante, Empleado, Login } from '../proyecto/interfaces/usuario.interfeces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlBase: string= environment.baseUrl;

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
  postEstudiante(user: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.urlBase}/estudiantes`, user)
  }

  postEmpleado(user: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(`${this.urlBase}/empleados`, user)
  }

  //login

  postLoginEstudiante(user:Login): Observable<Login>{
    return this.http.post<Login>(`${this.urlBase}/estudiantes/login`, user)
  }

  postLoginEmpleados(user:Login): Observable<Login>{
    return this.http.post<Login>(`${this.urlBase}/empleados/login`, user)
  }

}
