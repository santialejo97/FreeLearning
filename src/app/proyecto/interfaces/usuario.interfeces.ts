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

export interface Temas {
  temaId      : number;
  temaNombre  : string;
  temaImagen  : string;
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
  estudianteNombre: string,
  estudianteEmail: string,
  estudiantePassword: string
}

export interface Response{
  ok: boolean,
  usuarioId: number,
  token: string,
  name?: string,
  msg?: string 
}

export interface User{
  id: number,
  name: string,
  msg: string 
}

export interface Foro{
  foroId?: string,
  foroDescripcion: string,
  fk_estudianteId?: number,
  fk_estadoId?: number,
  imagen?:string
}
