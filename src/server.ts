import dotenv from 'dotenv';
import express from 'express';
import config from './config/default';
import { connect } from './utils/connect';
import router from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

// Load environment variables from .env file in the root directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const port: number = config.port;

const app = express();

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
});
