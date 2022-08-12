import dotenv from 'dotenv';
import cors from 'cors';
import express, { Errback, NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '@docs/swaggerSpec';
import router from '../routes/index';
// import swaggerDocument from '@docs/swagger.json';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Hi!' });
});

app.use((request: Request, response: Response, next: NextFunction) => {
  response.status(404).json({ message: 'Page Not Found' });
});

app.use(
  (err: Errback, request: Request, response: Response, next: NextFunction) => {
    return response.status(500).json({ message: 'Internal Error' });
  },
);

export default app;
