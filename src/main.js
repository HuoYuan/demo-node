import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from 'routes';
import cors from 'cors';

import log from 'loglevel';
log.setLevel('trace');

// const environment = NODE_ENV || 'development';
const host = 'localhost';
const database = 'demo';
const mongoUrl = `mongodb://${host}/${database}`;
mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on('error', (err) => {
  log.error(err);
});
db.once('open', () => {
  log.info('Database has connected.');
});

const app = express();
app.use(cors());
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use('/', routes);
app.listen('3000', () => {
  log.info('App is listening on 3000.');
});
