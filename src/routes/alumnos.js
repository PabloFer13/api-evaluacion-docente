import express from 'express';
import controllers from '../controllers';

const { Router } = express;
const { alumnos } = controllers;

const api = Router();


api.get('/', alumnos.hi);
// api.post('/', alumnos.create);
api.post('/session', alumnos.login);
// api.get('/:id', alumnos.get);
api.get('/:id/cargas', alumnos.getCargas);
// api.post('/:id/cargas', alumnos.addCarga);
// api.get('/:id/cargas/:id', alumnos.getCarga);
// api.post('/:id/cargas/:id', alumnos.answer);
// api.put('/:id/cargas/:id', alumnos.editSurvey);

export default api;
