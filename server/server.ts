import express, { Application, Request, Response } from "express";
import axios from "axios";
import xml2js from 'xml2js';


const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());


app.get('/', async (req: Request, res: Response) => {
  try {

    // gets data from the flickr public feed
    const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne');
    const parser = new xml2js.Parser();

    parser.parseString(response.data, (error: Error | null, result: any) => {

      if (error) {
        console.log(error);
        res.status(500).json({ message: 'XML no good :/' });
      } else {
        res.json(result);
      }

    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
