CREATE DATABASE freelearning;
USE freelearning;

CREATE TABLE  IF NOT EXISTS estados (
	estadoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	estadoNombre VARCHAR(50) NOT NULL,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS tipoUsuarios (
tipoUsuarioId INT(11) AUTO_INCREMENT PRIMARY KEY,
tipoUsuarioNombre VARCHAR(150) NOT NULL,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS carreras (
	carreraId INT(11) AUTO_INCREMENT PRIMARY KEY,
	carreraNombre VARCHAR(150) NOT NULL,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS temas (
	temaId INT(11) AUTO_INCREMENT PRIMARY KEY,
	temaNombre VARCHAR(150) NOT NULL,
	temaImagen VARCHAR(150) NOT NULL,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS estudiantes (
	estudianteId INT(11) AUTO_INCREMENT PRIMARY KEY,
	estudianteNombre VARCHAR(150) NOT NULL,
	estudianteEmail VARCHAR(150) NOT NULL,
	estudiantePassword VARCHAR(150) NOT NULL,
	estudiantePoliticaDatos boolean NOT NULL,
	fk_carreraId INT(11),
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11),
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS empleados (
	empleadoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	empleadoNombre VARCHAR(150) NOT NULL,
	empleadoEmail VARCHAR(150) NOT NULL,
	empleadoPassword VARCHAR(150) NOT NULL,
	empleadoPoliticaDatos boolean NOT NULL,
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11),
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE  IF NOT EXISTS modulos (
	moduloId INT(11) AUTO_INCREMENT PRIMARY KEY,
	moduloNombre VARCHAR(50)  NOT NULL,
	moduloLink VARCHAR(50) NOT NULL,
	fk_estadoId INT(11)
,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL); 

CREATE TABLE IF NOT EXISTS derechos (
	derechoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	fk_tipoUsuarioId INT(11),
	fk_moduloId INT(11),
	fk_estadoId INT(11),
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS tipoPublicaciones (
	tipoPublicacionId INT(11) AUTO_INCREMENT PRIMARY KEY,
	tipoPublicacionNombre VARCHAR(150) NOT NULL,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS publicaciones (
	publicacionId INT(11) AUTO_INCREMENT PRIMARY KEY,
	publicacionTitulo  VARCHAR(140) NOT NULL,
	publicacionDescripcion TEXT NOT NULL,
	publicacionFechaCreacion DATETIME NOT NULL,
	fk_tipoPublicacionId INT(11),
	fk_estudianteId INT(11),
	fk_estadoId INT(11),
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS  publicacion_extras (
	publicacion_extraId INT(11) AUTO_INCREMENT PRIMARY KEY,
	publicacion_extraDescripcion VARCHAR(250)  NOT NULL,
	publicacion_extraUbicacion VARCHAR(250)  NOT NULL,
	publicacion_extraImagen LONGBLOB  NULL,
	fk_estadoId INT(11),
	fk_publicacionId INT(11),
	fechaRegistro DATE ,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);
CREATE TABLE IF NOT EXISTS  foros (
	foroId INT(11) AUTO_INCREMENT PRIMARY KEY,
	foroDescripcion VARCHAR(250)  NOT NULL,
	fk_estudianteId INT(11),
	fk_estadoId INT(11),
	fk_temaId INT(11),
	fechaRegistro DATE ,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS  respuesta_foros (
	respuesta_foroId INT(11) AUTO_INCREMENT PRIMARY KEY,
	respuesta_foroDescripcion VARCHAR(250)  NOT NULL,
	fk_foroId INT(11),
	fk_estudianteId INT(11),
	fk_estadoId INT(11),
	fechaRegistro DATE ,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);

CREATE TABLE IF NOT EXISTS  trazabilidades (
	trazabilidadId INT(11) AUTO_INCREMENT PRIMARY KEY,
	trazabilidadDescripcion VARCHAR(250)  NOT NULL,
	fk_usuarioId INT(11),
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11),
	fechaRegistro DATE ,
	`createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL);



-- RELACIONES

ALTER TABLE estudiantes ADD CONSTRAINT fk_carreraId  FOREIGN KEY(fk_carreraId) REFERENCES carreras(carreraId);
ALTER TABLE estudiantes ADD CONSTRAINT fk_tipoUsuarioId  FOREIGN KEY(fk_tipoUsuarioId) REFERENCES tipoUsuarios(tipoUsuarioId);

ALTER TABLE derechos ADD CONSTRAINT fk_tipoUsuarioId2 FOREIGN KEY (fk_tipoUsuarioId) REFERENCES tipoUsuarios (tipoUsuarioId);
ALTER TABLE derechos ADD CONSTRAINT fk_moduloId FOREIGN KEY (fk_moduloId) REFERENCES modulos (moduloId);

ALTER TABLE publicaciones ADD CONSTRAINT fk_tipoPublicacionId FOREIGN KEY (fk_tipoPublicacionId) REFERENCES tipoPublicaciones (tipoPublicacionId);
ALTER TABLE publicaciones ADD CONSTRAINT fk_usuarioId FOREIGN KEY (fk_estudianteId) REFERENCES estudiantes (estudianteId);

ALTER TABLE publicacion_extras ADD CONSTRAINT fk_publicacionId FOREIGN KEY (fk_publicacionId) REFERENCES publicaciones (publicacionId);

ALTER TABLE foros ADD CONSTRAINT fk_usuarioId2 FOREIGN KEY (fk_estudianteId) REFERENCES estudiantes (estudianteId);
ALTER TABLE foros ADD CONSTRAINT fk_tema FOREIGN KEY (fk_temaId) REFERENCES temas (temaId);

ALTER TABLE respuesta_foros ADD CONSTRAINT fk_usuarioId3 FOREIGN KEY (fk_estudianteId) REFERENCES estudiantes (estudianteId);
ALTER TABLE respuesta_foros ADD CONSTRAINT fk_foroId FOREIGN KEY (fk_foroId) REFERENCES foros (foroId);

ALTER TABLE trazabilidades ADD CONSTRAINT fk_tipoUsuarioId3 FOREIGN KEY (fk_tipoUsuarioId) REFERENCES tipoUsuarios (tipoUsuarioId);

ALTER TABLE empleados ADD CONSTRAINT  fk_tipoUsuarioId5 FOREIGN KEY(fk_tipoUsuarioId) REFERENCES tipoUsuarios(tipoUsuarioId);



