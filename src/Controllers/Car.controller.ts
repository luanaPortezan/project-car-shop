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

  private errorInvalidMongoDBId = 'Invalid mongo id';
  private errorCarNotFuond = 'Car not found';

  public async findByIdCar() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: this.errorInvalidMongoDBId });
    }

    try {
      const car = await this.service.findByIdCar(id);
      if (!car) {
        return this.res.status(404).json({ message: this.errorCarNotFuond });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: this.errorInvalidMongoDBId });
    }

    try {
      const car = this.req.body;
      const updatedCar = await this.service.updateOne(id, car);

      if (!updatedCar) {
        return this.res.status(404).json({ message: this.errorCarNotFuond });
      }
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;