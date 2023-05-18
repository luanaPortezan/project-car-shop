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

  public async insertOneCar(car: ICar): Promise<Car | undefined> {
    const result = await this.carODM.create(car);

    return this.createCarDomain(result);
  }
}
export default CarService;