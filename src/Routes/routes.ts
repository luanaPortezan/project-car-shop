import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => 
    new CarController(req, res, next)
      .insertOneNewCar(),
);
routes.get(
  '/cars',
  (req, res, next) => 
    new CarController(req, res, next)
      .findAllCar(),
);
export default routes;