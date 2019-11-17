import express from 'express';
import controllers from '../controllers';

const { Router } = express;
const { periodos } = controllers;

const api = Router();


api.get('/current', periodos.current);


export default api;
