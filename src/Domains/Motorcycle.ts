import IMotorcycle from '../Interfaces/IMotorcycle';
import CategoryTypes from '../Middlewares/CategoryTypes';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: CategoryTypes;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  public getBuycategory() {
    return this.category;
  }

  public setCategory(value: CategoryTypes) {
    this.category = value;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setengineCapacity(value: number) {
    this.engineCapacity = value;
  }
}
export default Motorcycle;