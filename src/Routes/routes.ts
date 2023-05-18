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
routes.get(
  '/cars/:id',
  (req, res, next) =>
    new CarController(req, res, next)
      .findByIdCar(),
);

routes.put(
  '/:id',
  (req, res, next) => 
    new CarController(req, res, next)
      .updateById(),
);

export default routes;