import { Router } from 'express';

import MotorcycleController from '../Controllers/Motorcycle.controller';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => 
    new MotorcycleController(req, res, next)
      .insertOneMotorcycle(),
);

export default routes;