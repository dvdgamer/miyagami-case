import express, { Application, Request, Response } from "express";
import axios from "axios";
import xml2js from 'xml2js';


const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {

    // Gets data from the flickr public feed
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

// app.get('/search', async (req: Request, res: Response) => {
//   const searchTerm  = req.query.searchTerm;
//   axios.get('https://api.flickr.com/services/rest', {
//     params: {
//       method: 'flickr.photos.search',
//       api_key: process.env.FLICKR_API_KEY,
//       text: searchTerm,
//       format: 'json',
//       nojsoncallback: 1,
//     },
//   })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
