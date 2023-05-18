import { Router } from 'express';

import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new 
  CarController(req, res, next)
    .insertOneCar(),
);
routes.get(
  '/:id',
  (req, res, next) => new
  CarController(req, res, next)
    .findById(),
);
routes.put(
  '/:id',
  (req, res, next) => new
  CarController(req, res, next)
    .updateById(),
);
routes.get(
  '/',
  (req, res, next) => new
  CarController(req, res, next)
    .findAll(),
);
routes.delete(
  '/:id',
  (req, res, next) => new 
  CarController(req, res, next)
    .removeById(),
);
export default routes;