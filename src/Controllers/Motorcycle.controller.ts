import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
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

  private InvalidMongoIdError = 'Invalid mongo id';
  private MotorcycleNotFoundError = 'Motorcycle not found';

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

  public async insertOneNewMotorcycle() {
    const motorcycle = this.req.body;

    try {
      const newMotorcycle = await this.service.insertOneNewMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async findAllMotorcycle() {
    try {
      const motorcycleAllList = await this.service.findAllMotorcycle();
      return this.res.status(200).json(motorcycleAllList);
    } catch (error) {
      this.next(error);
    }
  }
  public async findByIdMotorcycle() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: this.InvalidMongoIdError });
    }

    try {
      const motorcycle = await this.service.findByIdMotorcycle(id);
      if (!motorcycle) {
        return this.res.status(404).json({ message: this.MotorcycleNotFoundError });
      }
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateByIdMotorcycle() {
    const { id } = this.req.params;
    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: this.InvalidMongoIdError });
    }

    try {
      const motorcycle = this.req.body;
      const updateMotorcycle = await this.service.updateOneMotorcycle(id, motorcycle);

      if (!updateMotorcycle) {
        return this.res.status(404).json({ message: this.MotorcycleNotFoundError });
      }
      return this.res.status(200).json(updateMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async removeByIdMotorcycle() {
    const { id } = this.req.params;

    if (!this.isValidId(id)) {
      return this.res.status(422).json({ message: this.InvalidMongoIdError });
    }

    try {
      const removeMotorcycle = await this.service.removeOneMotorcycle(id);
      if (!removeMotorcycle) {
        return this.res.status(404).json({ message: this.MotorcycleNotFoundError });
      }
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }
}
export default MotorcycleController;