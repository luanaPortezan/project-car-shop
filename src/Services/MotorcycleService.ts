import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private motorcycleODM: MotorcycleODM;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }
  private createMotorcycleDomain(
    motorcycle: IMotorcycle | null,
  ) {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
  }

  public async insertOneMotorcycle(motorcycle: IMotorcycle)
    : | Promise<Motorcycle | undefined> {
    const result = await 
    this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(result);
  }

  public async findAll()
  : Promise<(Motorcycle | undefined)[] | undefined> {
    const result = await 
    this.motorcycleODM.findAll();
    const motorcycleList = result?.map((motorcycle) => 
      this.createMotorcycleDomain(motorcycle));
    return motorcycleList;
  }

  public async findById(id: string)
    :Promise <Motorcycle | undefined> {
    const result = await
    this.motorcycleODM.findById(id);
    return this.createMotorcycleDomain(result);
  }

  public async updateOne(id: string, motorcycle: IMotorcycle)
    : Promise<Motorcycle | undefined> {
    const result = await
    this.motorcycleODM.update(id, motorcycle);
    return this.createMotorcycleDomain(result);
  }

  public async removeOne(id:string)
    : Promise <Motorcycle | undefined> {
    const result = await
    this.motorcycleODM.remove(id);
    return this.createMotorcycleDomain(result);
  }
}
export default MotorcycleService;