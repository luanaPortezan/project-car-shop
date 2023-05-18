import express from 'express';
import routes from './Routes/car.routes';
import ErrorHandler from './Middlewares/error.handler';

const app = express();
app.use(express.json());

app.use(ErrorHandler.handle);
app.use(routes);

export default app;
