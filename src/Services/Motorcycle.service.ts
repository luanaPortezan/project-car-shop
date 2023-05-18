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

  public async insertOneNewMotorcycle(motorcycle: IMotorcycle): | Promise<Motorcycle | undefined> {
    const result = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(result);
  }

  public async findAllMotorcycle(): Promise<(Motorcycle | undefined)[] | undefined> {
    const result = await this.motorcycleODM.findAll();
    const motorcycleList = result?.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleList;
  }

  public async findByIdMotorcycle(id: string):Promise <Motorcycle | undefined> {
    const result = await this.motorcycleODM.findById(id);
    return this.createMotorcycleDomain(result);
  }

  public async updateOneMotorcycle(id: string, motorcycle: IMotorcycle)
    : Promise<Motorcycle | undefined> {
    const result = await this.motorcycleODM.update(id, motorcycle);
    return this.createMotorcycleDomain(result);
  }
  public async removeOneMotorcycle(id:string): Promise <Motorcycle | undefined> {
    const result = await this.motorcycleODM.remove(id);

    return this.createMotorcycleDomain(result);
  }
}

export default MotorcycleService;