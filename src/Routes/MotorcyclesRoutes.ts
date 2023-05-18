import { Router } from 'express';

import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new
  MotorcycleController(req, res, next)
    .insertOneMotorcycle(),
);
routes.get(
  '/:id',
  (req, res, next) => new
  MotorcycleController(req, res, next)
    .findById(),
);
routes.put(
  '/:id',
  (req, res, next) => new
  MotorcycleController(req, res, next)
    .updateById(),
);
routes.get(
  '/',
  (req, res, next) => new
  MotorcycleController(req, res, next)
    .findAll(),
);
routes.delete(
  '/:id',
  (req, res, next) => new
  MotorcycleController(req, res, next)
    .removeById(),
);

export default routes;