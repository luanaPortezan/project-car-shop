import { 
  Request,
  Response,
  NextFunction,
} from 'express';
import { ObjectId } from 'mongodb';

import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  } 

  private InvalidMongoIdError = 'Invalid mongo id';
  private CarNotFoundError = 'Car not found';

  private isValidId(
    id: string,
  )
    :boolean {
    try {
      if (new 
      ObjectId(id)
        .toString() === id) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  public async insertOneCar() {
    const car = this.req.body;
    try {
      const newCar = await 
      this.service.insertOneCar(car);
      return this.res
        .status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const carList = await 
      this.service.findAll();
      return this.res
        .status(200).json(carList);
    } catch (error) {
      this.next(error);
    }
  }
  public async findById() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res
        .status(422).json({
          message: this.InvalidMongoIdError,
        });
    }
    try {
      const car = await
      this.service.findById(id);
      if (!car) {
        return this.res
          .status(404).json({ 
            message: this.CarNotFoundError,
          });
      }
      return this.res
        .status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res
        .status(422).json({
          message: this.InvalidMongoIdError,
        });
    }
    try {
      const car = this.req.body;
      const updatedCar = await 
      this.service.updateOne(id, car);
      
      if (!updatedCar) {
        return this.res
          .status(404).json({ 
            message: this.CarNotFoundError,
          });
      }
      return this.res
        .status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async removeById() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res
        .status(422).json({ 
          message: this.InvalidMongoIdError,
        });
    }

    try {
      const removeCar = await 
      this.service.removeOne(id);
      if (!removeCar) {
        return this.res
          .status(404).json({ 
            message: this.CarNotFoundError,
          });
      }
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;