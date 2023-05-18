import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  } 

  public async insertOneMotorcycle() {
    const motorcycle = this.req.body;

    try {
      const newMotorcycle = await this.service.insertOneMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}
export default MotorcycleController;