export interface Estudiante {
  estudianteNombre: string;
  estudianteEmail: string;
  estudiantePassword: string;
  fk_carreraId: number;
  estudiantePoliticaDatos: number ;
  estudianteId?: number;
  fk_estadoId?: number;
}

export interface Empleado {
  empleadoNombre: string;
  empleadoEmail: string;
  empleadoPassword: string;
  empleadoPoliticaDatos: number ;
}

export interface Carrera {
  carreraId:     number;
  carreraNombre: string;
  createdAt?:     null;
  updatedAt?:     null;
}

export interface Login{
  Email: string,
  Password: string,
  success?: string,
  ok?: boolean 
}

export interface Cambio{
  user: string,
  email: string,
  password: string
}

export interface Response{
  ok: boolean,
  token: string,
  name?: string,
  msg?: string 
}

export interface User{
  name: string,
  msg: string 
}
