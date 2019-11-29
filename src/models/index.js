import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
// import moment from 'moment';
import config from '../config';
// import services from '../services';

const {
  database,
  username,
  password,
  host,
  dbport,
} = config;

const basename = path.basename(__filename);

const db = {};

console.log(config);
const sequelize = new Sequelize(database, username, password, { host, dialect: 'postgres', dbport });

const allFiles = fs.readdirSync(__dirname);

const modelFiles = allFiles.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));

modelFiles.forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

/* eslint-disable-next-line */
console.log(db);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize.drop();
sequelize.sync()
  .then(async () => {

    // Crear Alumnos de Prueba
    const dataAlumnos = [
      {
        nombre: 'Alumno',
        segundoNombre: 'Uno',
        apellido: 'Apellido',
        segundoApellido: 'Apellido',
        matricula: '1x0yzzzzzz',
        email: '1x0yzzzzzz@ucaribe.edu.mx',
        password: 'HolaMundo123',
      },
      {
        nombre: 'Alumno',
        apellido: 'PrimerApellido',
        segundoApellido: 'SegundoApellido',
        matricula: '1a0bccccc',
        email: '1a0bccccc@ucaribe.edu.mx',
        password: 'HolaMundo123',
      },
    ];
    const alumno1 = await db.Alumnos.create(dataAlumnos[0]);
    const alumno2 = await db.Alumnos.create(dataAlumnos[1]);

    // Crear Maestros
    const dataMaestros = [
      {
        nombre: 'Maestro',
        segundoNombre: 'Uno',
        apellido: 'Apellido',
        segundoApellido: 'Apellido',
        email: 'muno@ucaribe.edu.mx',
        password: 'HolaMundo123',
      },
      {
        nombre: 'MaestroDos',
        apellido: 'PrimerApellido',
        segundoApellido: 'SegundoApellido',
        email: 'aprimerapellido@ucaribe.edu.mx',
        password: 'HolaMundo123',
      },
    ];
    const maestro1 = await db.Maestros.create(dataMaestros[0]);
    const maestro2 = await db.Maestros.create(dataMaestros[1]);

    // Crear Horarios
    const dataHorarios = [
      {
        seccion: 'seccion 1',
        primerDia: 'Lunes',
        segundoDia: 'Miercoles',
        horaInicioPrimerDia: '10:00',
        horaFinPrimerDia: '12:00',
        horaInicioSegundoDia: '10:00',
        horaFinSegundoDia: '12:00',
      },
      {
        seccion: 'seccion 2',
        primerDia: 'Martes',
        segundoDia: 'Jueves',
        horaInicioPrimerDia: '13:00',
        horaFinPrimerDia: '15:00',
        horaInicioSegundoDia: '14:00',
        horaFinSegundoDia: '16:00',
      },
      {
        seccion: 'seccion 3',
        primerDia: 'Miercoles',
        segundoDia: 'Viernes',
        horaInicioPrimerDia: '17:00',
        horaFinPrimerDia: '19:00',
        horaInicioSegundoDia: '18:00',
        horaFinSegundoDia: '20:00',
      },
    ];
    const horario1 = await db.Horarios.create(dataHorarios[0]);
    const horario2 = await db.Horarios.create(dataHorarios[1]);
    const horario3 = await db.Horarios.create(dataHorarios[2]);

    // Crear Materias
    const dataMaterias = [
      {
        nombre: 'Arquitectura de Objetos Distribuidos',
        codigo: 'IT100',
      },
      {
        nombre: 'Sistemas POSIX',
        codigo: 'IT101',
      },
      {
        nombre: 'Algoritmos y Estructura de Datos',
        codigo: 'IT103',
      },
      {
        nombre: 'Bases de Datos',
        codigo: 'IT150',
      },
      {
        nombre: 'Programacion Orientada a Objetos',
        codigo: 'IT313',
      },
    ];
    const materia1 = await db.Materias.create(dataMaterias[0]);
    const materia2 = await db.Materias.create(dataMaterias[1]);
    const materia3 = await db.Materias.create(dataMaterias[2]);
    const materia4 = await db.Materias.create(dataMaterias[3]);
    const materia5 = await db.Materias.create(dataMaterias[4]);

    // Crear Opciones
    const dataOpciones = [
      {
        value: 'siempre',
        text: 'Siempre (Mas del 90% de las veces)',
      },
      {
        value: 'casi-siempre',
        text: 'Casi Siempre (Entre el 75% y 90% de las veces)',
      },
      {
        value: 'veces',
        text: 'Alguna Veces (Entre el 50% y 75% de las veces)',
      },
      {
        value: 'casi-nunca',
        text: 'Casi Nunca (Entre el 25% y 50% de las veces)',
      },
      {
        value: 'nunca',
        text: 'Nunca (Menos del 25% de las veces)',
      },
      {
        value: 'investigacion',
        text: 'Investigaciones',
      },
      {
        value: 'exposicion',
        text: 'Exposiciones',
      },
      {
        value: 'maqueta',
        text: 'Maquetas',
      },
      {
        value: 'video',
        text: 'Videos',
      },
      {
        value: 'resumen',
        text: 'Resumenes',
      },
    ];
    const opcion1 = await db.Opciones.create(dataOpciones[0]);
    const opcion2 = await db.Opciones.create(dataOpciones[1]);
    const opcion3 = await db.Opciones.create(dataOpciones[2]);
    const opcion4 = await db.Opciones.create(dataOpciones[3]);
    const opcion5 = await db.Opciones.create(dataOpciones[4]);
    const opcion6 = await db.Opciones.create(dataOpciones[5]);
    const opcion7 = await db.Opciones.create(dataOpciones[6]);
    const opcion8 = await db.Opciones.create(dataOpciones[7]);
    const opcion9 = await db.Opciones.create(dataOpciones[8]);
    const opcion10 = await db.Opciones.create(dataOpciones[9]);

    // Crear Preguntas
    const dataPreguntas = [
      {
        text: 'El maestro inicia puntualmente la clase',
        tipo: 'select-one',
        min: 0,
        max: 0,
      },
      {
        text: 'Anote 3 aspectos positivos de la clase',
        tipo: 'multiple-input',
        min: 3,
        max: 3,
      },
      {
        text: 'Escriba sus comentarios sobre la clase y el maestro.',
        tipo: 'text-input',
        min: 0,
        max: 0,
      },
      {
        text: 'Tipos de tareas que mas deja el maestro.',
        tipo: 'multiple-select',
        min: 1,
        max: 3,
      },
    ];
    const pregunta1 = await db.Preguntas.create(dataPreguntas[0]);
    const pregunta2 = await db.Preguntas.create(dataPreguntas[1]);
    const pregunta3 = await db.Preguntas.create(dataPreguntas[2]);
    const pregunta4 = await db.Preguntas.create(dataPreguntas[3]);

    // Crear Periodos
    const dataPeriodos = [
      {
        nombre: 'primavera',
        anio: 2019,
        inicio: moment('10/01/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        fin: moment('14/05/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        inicioEncuesta: moment('24/01/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        finEncuesta: moment('07/02/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
      },
      {
        nombre: 'verano',
        anio: 2019,
        inicio: moment('10/08/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        fin: moment('15/12/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        inicioEncuesta: moment('24/08/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
        finEncuesta: moment('07/09/2019', 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ssZ'),
      },
    ];
    const periodo1 = await db.Periodos.create(dataPeriodos[0]);
    const periodo2 = await db.Periodos.create(dataPeriodos[1]);

    pregunta1.setOpciones([opcion1, opcion2, opcion3, opcion4, opcion5]);
    pregunta4.setOpciones([opcion6, opcion7, opcion8, opcion9, opcion10]);

    periodo1.setPreguntas([pregunta1, pregunta2, pregunta3, pregunta4]);
    periodo2.setPreguntas([pregunta1, pregunta2, pregunta3, pregunta4]);

    // Crear Ofertas
    const oferta1 = await db.Ofertas.create({});
    const oferta2 = await db.Ofertas.create({});
    const oferta3 = await db.Ofertas.create({});
    const oferta4 = await db.Ofertas.create({});
    const oferta5 = await db.Ofertas.create({});
    const oferta6 = await db.Ofertas.create({});

    oferta1.setPeriodo(periodo2);
    oferta1.setMaestro(maestro1);
    oferta1.setHorario(horario1);
    oferta1.setMateria(materia1);

    oferta2.setPeriodo(periodo2);
    oferta2.setMaestro(maestro1);
    oferta2.setHorario(horario2);
    oferta2.setMateria(materia2);

    oferta3.setPeriodo(periodo2);
    oferta3.setMaestro(maestro1);
    oferta3.setHorario(horario3);
    oferta3.setMateria(materia3);

    oferta4.setPeriodo(periodo2);
    oferta4.setMaestro(maestro2);
    oferta4.setHorario(horario3);
    oferta4.setMateria(materia3);

    oferta5.setPeriodo(periodo2);
    oferta5.setMaestro(maestro2);
    oferta5.setHorario(horario2);
    oferta5.setMateria(materia4);

    oferta6.setPeriodo(periodo2);
    oferta6.setMaestro(maestro2);
    oferta6.setHorario(horario1);
    oferta6.setMateria(materia5);

    // Crear Cargas
    const carga1 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga2 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga3 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga4 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga5 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga6 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga7 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga8 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga9 = await db.Cargas.create({ encuestaStatus: 'unanswered' });
    const carga10 = await db.Cargas.create({ encuestaStatus: 'unanswered' });


    carga1.setAlumno(alumno1);
    carga1.setOferta(oferta1);
    carga2.setAlumno(alumno1);
    carga2.setOferta(oferta2);
    carga3.setAlumno(alumno1);
    carga3.setOferta(oferta3);
    carga4.setAlumno(alumno1);
    carga4.setOferta(oferta5);
    carga5.setAlumno(alumno1);
    carga5.setOferta(oferta6);

    carga6.setAlumno(alumno2);
    carga6.setOferta(oferta1);
    carga7.setAlumno(alumno2);
    carga7.setOferta(oferta2);
    carga8.setAlumno(alumno2);
    carga8.setOferta(oferta4);
    carga9.setAlumno(alumno2);
    carga9.setOferta(oferta5);
    carga10.setAlumno(alumno2);
    carga10.setOferta(oferta6);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;


export default db;
