import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import CarService from '../Services/Car.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  private isValidId(id: string):boolean {
    try {
      if (new ObjectId(id).toString() === id) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  public async insertOneNewCar() {
    const car = this.req.body;

    try {
      const NewCarRegistre = await this.service.insertOneNewCar(car);
      return this.res.status(201).json(NewCarRegistre);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCar() {
    try {
      const carList = await this.service.findAllCar();
      return this.res.status(200).json(carList);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;