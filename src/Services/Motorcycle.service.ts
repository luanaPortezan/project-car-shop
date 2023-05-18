import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleModelODM from '../Models/Motorcycle.modelODM';

class MotorcycleService {
  private motorcycleODM: MotorcycleModelODM;

  constructor() {
    this.motorcycleODM = new MotorcycleModelODM();
  }
  private createMotorcycleDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
  }

  public async insertOneMotorcycle(motorcycle: IMotorcycle): | Promise<Motorcycle | undefined> {
    const result = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(result);
  }
}
export default MotorcycleService;