import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import MotorcycleService from '../Services/MotorcycleService';

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
  
  private isValidId(
    id: string,
  )
    :boolean {
    try {
      if (new ObjectId(id)
        .toString() === id) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  public async insertOneMotorcycle() {
    const motorcycle = this.req.body;
    try {
      const newMotorcycle = await 
      this.service.insertOneMotorcycle(motorcycle);
      return this.res
        .status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const motorcycleList = await 
      this.service.findAll();
      return this.res
        .status(200).json(motorcycleList);
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
      const motorcycle = await 
      this.service.findById(id);
      if (!motorcycle) {
        return this.res
          .status(404).json({
            message: this.MotorcycleNotFoundError,
          });
      }
      return this.res
        .status(200).json(motorcycle);
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
      const motorcycle = this.req.body;
      const updateMotorcycle = await 
      this.service.updateOne(id, motorcycle);
      if (!updateMotorcycle) {
        return this.res
          .status(404).json({
            message: this.MotorcycleNotFoundError,
          });
      }
      return this.res
        .status(200).json(updateMotorcycle);
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
      const removeMotorcycle = await
      this.service.removeOne(id);
      if (!removeMotorcycle) {
        return this.res
          .status(404).json({
            message: this.MotorcycleNotFoundError,
          });
      }
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }
}
export default MotorcycleController;