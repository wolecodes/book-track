/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LIBRARY SYSTEM API',
      version,
      description: 'A simple Express Library API',
    },
  },
  apis: ['src/router.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);

export function swaggerDoc(app: Express, port: number): void {
  // Serve the Swagger definition at /api-docs.json
  app.get('/api-docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  const isProd = process.env.NODE_ENV === 'production';
  const baseUrl = isProd
    ? process.env.BASE_URL // Use provided URL in production
    : `http://localhost:${port}`;

  console.log(` 📚 Docs available at ${baseUrl}/api-docs`);
}

export default swaggerDoc;
