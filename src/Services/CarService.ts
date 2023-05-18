import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
  }

  public async insertOneCar(car: ICar)
    : Promise<Car | undefined> {
    const result = await 
    this.carODM.create(car);
    return this.createCarDomain(result);
  }

  public async findAll()
  : Promise<(Car | undefined)[] | undefined> {
    const result = await
    this.carODM.findAll();
    const carList = result?.map((car) =>
      this.createCarDomain(car));
    return carList;
  }

  public async findById(id: string)
    : Promise <Car | undefined> {
    const result = await 
    this.carODM.findById(id);
    return this.createCarDomain(result);
  }

  public async updateOne(id: string, car: ICar)
    :Promise <Car | undefined> {
    const result = await
    this.carODM.update(id, car);
    return this.createCarDomain(result);
  }

  public async removeOne(id:string)
    : Promise <Car | undefined> {
    const result = await
    this.carODM.remove(id);
    return this.createCarDomain(result);
  }
}
export default CarService;