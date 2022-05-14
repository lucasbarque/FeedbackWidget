import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

var corsOptions = {
  origin: [
    'http://localhost:3333',
    'https://feedbackwidget-production-5b18.up.railway.app',
  ],
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Http server running!');
});
