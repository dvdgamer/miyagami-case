import express, { Application, Request, Response } from "express";


const app = express();
const port = 3000;

app.get('/api/home', (req: Request, res: Response) => {
  res.send('Hello, World!');
  res.json({ message : 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
