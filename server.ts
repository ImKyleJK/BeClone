import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Success.');
});

app.listen(80, () => {
  console.log(`⚡️[server]: Server is running on port 80`);
});
