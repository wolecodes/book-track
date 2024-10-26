import express, { type Express } from 'express';
import router from './router';

const app: Express = express();
app.use(express.json());

// Home URL is introductory URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/', router);

export default app;
