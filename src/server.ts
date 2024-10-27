import express, { type Express } from 'express';
import router from './router';

const app: Express = express();
app.use(express.json());

// Home URL is introductory URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/books', router);

// Middleware to catch unhandled routes
app.use((_req, _res, next) => {
  const error = new Error('ROUTE NOT FOUND');
  // pass the errorr to the next middleware
  next(error);
});

// Error handling middleware
app.use((err, _req, res, _next) => {
  res.status(err.status ?? 500);
  res.json({
    error: {
      message: err.message ?? 'Internal Server Error',
    },
  });
});

export default app;
