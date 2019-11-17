/* eslint-disable */
import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morganBody from 'morgan-body';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import config from './config';
import routes from './routes';
import swaggerOptions from './config/swagger';
import db from './models';

/* eslint-enable */

const app = express();
app.server = http.createServer(app);

// middleware
app.use(cors());

// swagger Documentation
const swaggerSpec = swaggerJSDoc(swaggerOptions);
const swaggerUiHandler = swaggerUi.setup(swaggerSpec);
const docsJsonPath = '/api-docs.json';

app.get(docsJsonPath, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/docs', swaggerUi.serve, (req, res, next) => {
  if (!req.query.url) {
    res.redirect(`/docs?url=${req.protocol}://${req.headers.host}${docsJsonPath}`);
  } else {
    swaggerUiHandler(req, res, next);
  }
});

app.use(bodyParser.json({
  limit: config.bodyLimit,
  type: '*/json',
}));

// hook morganBody to express app
if (process.env.NODE_ENV === 'development') {
  morganBody(app);
}

// api routes to /api
app.use('/api', routes);

app.server.listen(config.port);

/* eslint-disable-next-line */
console.log(`Started on 'http://localhost:${config.port}'`);

export default app;
