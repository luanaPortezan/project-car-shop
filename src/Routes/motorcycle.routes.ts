import { Router } from 'express';

import MotorcycleController from '../Controllers/Motorcycle.controller';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .insertOneNewMotorcycle(),
);
routes.get(
  '/:id',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .findByIdMotorcycle(),
);
routes.put(
  '/:id',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .updateByIdMotorcycle(),
);
routes.get(
  '/',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .findAllMotorcycle(),
);
routes.delete(
  '/:id',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .removeByIdMotorcycle(),
);
export default routes;