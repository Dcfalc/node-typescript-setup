import app from './app';

const port = parseInt(process.env.PORT as string, 10) || 5000;
app.listen(port, () => {
  console.log('\x1b[33m%s\x1b[0m', `⚡️🚀 Server running on the port: ${port}`);
});

// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config();
//   console.log(1);
// }

// const app: Express = express();
// const port = process.env.PORT || 5000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });
