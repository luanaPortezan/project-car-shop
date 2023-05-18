import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModelODM from '../Models/Car.modelODM';

class CarService {
  private carODM: CarModelODM;

  constructor() {
    this.carODM = new CarModelODM();
  }
  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
  }

  public async insertOneNewCar(car: ICar): Promise<Car | undefined> {
    const result = await this.carODM.create(car);
    return this.createCarDomain(result);
  }

  public async findAllCar(): Promise<(Car | undefined)[] | undefined> {
    const results = await this.carODM.findAll();
    const carAllList = results?.map((car) => this.createCarDomain(car));
    return carAllList;
  }

  public async findByIdCar(id: string): Promise <Car | undefined> {
    const result = await this.carODM.findById(id);
    return this.createCarDomain(result);
  }

  public async updateOneCar(id: string, car: ICar):Promise <Car | undefined> {
    const updated = await this.carODM.update(id, car);
    return this.createCarDomain(updated);
  }

  public async removeOneCar(id:string): Promise <Car | undefined> {
    const deleted = await this.carODM.remove(id);
    return this.createCarDomain(deleted);
  }
}
export default CarService;