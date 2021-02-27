CREATE DATABASE freelearning;
USE freelearning;

CREATE TABLE  IF NOT EXISTS estado (
	estadoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	estadoNombre VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS tipoUsuario (
tipoUsuarioId INT(11) AUTO_INCREMENT PRIMARY KEY,
tipoUsuarioNombre VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS carrera (
	carreraId INT(11) AUTO_INCREMENT PRIMARY KEY,
	carreraNombre VARCHAR(150) NOT NULL
	);

CREATE TABLE IF NOT EXISTS estudiante (
	estudianteId INT(11) AUTO_INCREMENT PRIMARY KEY,
	estudianteNombre VARCHAR(150) NOT NULL,
	estudianteEmail VARCHAR(150) NOT NULL,
	estudiantePassword VARCHAR(150) NOT NULL,
	estudiantePoliticaDatos boolean NOT NULL,
	fk_carreraId INT(11),
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11)
	);

CREATE TABLE IF NOT EXISTS empleado (
	empleadoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	empleadoNombre VARCHAR(150) NOT NULL,
	empleadoEmail VARCHAR(150) NOT NULL,
	empleadoPassword VARCHAR(150) NOT NULL,
	empleadoPoliticaDatos boolean NOT NULL,
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11)
	);

CREATE TABLE  IF NOT EXISTS modulo (
	moduloId INT(11) AUTO_INCREMENT PRIMARY KEY,
	moduloNombre VARCHAR(50)  NOT NULL,
	moduloLink VARCHAR(50) NOT NULL,
	fk_estadoId INT(11)
 	); 

CREATE TABLE IF NOT EXISTS derecho (
	derechoId INT(11) AUTO_INCREMENT PRIMARY KEY,
	fk_tipoUsuarioId INT(11),
	fk_moduloId INT(11),
	fk_estadoId INT(11)
	);

CREATE TABLE IF NOT EXISTS tipoPublicacion (
	tipoPublicacionId INT(11) AUTO_INCREMENT PRIMARY KEY,
	tipoPublicacionNombre VARCHAR(150) NOT NULL
	);

CREATE TABLE IF NOT EXISTS publicacion (
	publicacionId INT(11) AUTO_INCREMENT PRIMARY KEY,
	publicacionTitulo  VARCHAR(140) NOT NULL,
	publicacionDescripcion TEXT NOT NULL,
	publicacionFechaCreacion DATETIME NOT NULL,
	fk_tipoPublicacionId INT(11),
	fk_estudianteId INT(11),
	fk_estadoId INT(11)
	);
CREATE TABLE IF NOT EXISTS  publicacion_extra (
	publicacion_extraId INT(11) AUTO_INCREMENT PRIMARY KEY,
	publicacion_extraDescripcion VARCHAR(250)  NOT NULL,
	publicacion_extraUbicacion VARCHAR(250)  NOT NULL,
	publicacion_extraImagen LONGBLOB  NULL,
	fk_estadoId INT(11),
	fk_publicacionId INT(11),
	fechaRegistro DATE 
	);
CREATE TABLE IF NOT EXISTS  foro (
	foroId INT(11) AUTO_INCREMENT PRIMARY KEY,
	foroDescripcion VARCHAR(250)  NOT NULL,
	fk_estudianteId INT(11),
	fk_estadoId INT(11),
	fechaRegistro DATE 
	);

CREATE TABLE IF NOT EXISTS  respuesta_foro (
	respuesta_foroId INT(11) AUTO_INCREMENT PRIMARY KEY,
	respuesta_foroDescripcion VARCHAR(250)  NOT NULL,
	fk_foroId INT(11),
	fk_estudianteId INT(11),
	fk_estadoId INT(11),
	fechaRegistro DATE 
	);

CREATE TABLE IF NOT EXISTS  trazabilidad (
	trazabilidadId INT(11) AUTO_INCREMENT PRIMARY KEY,
	trazabilidadDescripcion VARCHAR(250)  NOT NULL,
	fk_usuarioId INT(11),
	fk_tipoUsuarioId INT(11),
	fk_estadoId INT(11),
	fechaRegistro DATE 
	);



-- RELACIONES

ALTER TABLE estudiante ADD CONSTRAINT fk_carreraId  FOREIGN KEY(fk_carreraId) REFERENCES carrera(carreraId);
ALTER TABLE estudiante ADD CONSTRAINT fk_tipoUsuarioId  FOREIGN KEY(fk_tipoUsuarioId) REFERENCES tipoUsuario(tipoUsuarioId);
ALTER TABLE estudiante ADD CONSTRAINT fk_estadoId2  FOREIGN KEY(fk_estadoId) REFERENCES estado(estadoId);

ALTER TABLE modulo ADD CONSTRAINT fk_estadoId3  FOREIGN KEY(fk_estadoId) REFERENCES estado(estadoId);

ALTER TABLE derecho ADD CONSTRAINT fk_tipoUsuarioId2 FOREIGN KEY (fk_tipoUsuarioId) REFERENCES tipoUsuario (tipoUsuarioId);
ALTER TABLE derecho ADD CONSTRAINT fk_moduloId FOREIGN KEY (fk_moduloId) REFERENCES modulo (moduloId);
ALTER TABLE derecho ADD CONSTRAINT fk_estadoId4 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);

ALTER TABLE publicacion ADD CONSTRAINT fk_tipoPublicacionId FOREIGN KEY (fk_tipoPublicacionId) REFERENCES tipoPublicacion (tipoPublicacionId);
ALTER TABLE publicacion ADD CONSTRAINT fk_usuarioId FOREIGN KEY (fk_usuarioId) REFERENCES estudiante (estudianteId);
ALTER TABLE publicacion ADD CONSTRAINT fk_estadoId5 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);

ALTER TABLE publicacion_extra ADD CONSTRAINT fk_estadoId6 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);
ALTER TABLE publicacion_extra ADD CONSTRAINT fk_publicacionId FOREIGN KEY (fk_publicacionId) REFERENCES publicacion (publicacionId);

ALTER TABLE foro ADD CONSTRAINT fk_usuarioId2 FOREIGN KEY (fk_usuarioId) REFERENCES estudiante (estudianteId);
ALTER TABLE foro ADD CONSTRAINT fk_estadoId7 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);

ALTER TABLE respuesta_foro ADD CONSTRAINT fk_usuarioId3 FOREIGN KEY (fk_usuarioId) REFERENCES estudiante (estudianteId);
ALTER TABLE respuesta_foro ADD CONSTRAINT fk_estadoId8 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);
ALTER TABLE respuesta_foro ADD CONSTRAINT fk_foroId FOREIGN KEY (fk_foroId) REFERENCES foro (foroId);

ALTER TABLE trazabilidad ADD CONSTRAINT fk_estadoId9 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);
ALTER TABLE trazabilidad ADD CONSTRAINT fk_tipoUsuarioId3 FOREIGN KEY (fk_tipoUsuarioId) REFERENCES tipoUsuario (tipoUsuarioId);

ALTER TABLE empleado ADD CONSTRAINT  fk_tipoUsuarioId5 FOREIGN KEY(fk_tipoUsuarioId) REFERENCES tipoUsuario(tipoUsuarioId);
ALTER TABLE empleado ADD CONSTRAINT fk_estadoId10 FOREIGN KEY (fk_estadoId) REFERENCES estado (estadoId);


