// import Vehicle from '../Domains/Vehicle';
// import IVehicle from '../Interfaces/IVehicle';
// import AbstractODM from '../Models/AbstractODM';

// class VehiclesService <T> {
//   private vehicleDomain: Vehicle;
//   private vehicleInterface: IVehicle;
//   private vehicleODM: AbstractODM<T>;

//   constructor(
//     vehicleDomain: Vehicle, 
//     vehicleInterface: IVehicle,
//     vehicleODM: AbstractODM<T>,
//   ) {
//     this.vehicleDomain = new vehicleDomain();
//     this.vehicleInterface = vehicleInterface;
//     this.vehicleODM = vehicleODM;
//   }
//   private createCarDomain(car: vehicleInterface.ThisParameterType | null) {
//     if (car) {
//       return this.vehicleDomain(car);
//     }
//   }

//   public async insertOneCar(car: ICar): Promise<Car | undefined> {
//     const result = await this.carODM.create(car);

//     return this.createCarDomain(result);
//   }

//   public async findAll(): Promise<(Car | undefined)[] | undefined> {
//     const result = await this.carODM.findAll();
//     const carList = result?.map((car) => this.createCarDomain(car));
//     return carList;
//   }

//   public async findById(id: string): Promise <Car | undefined> {
//     const result = await this.carODM.findById(id);

//     return this.createCarDomain(result);
//   }

//   public async updateOne(id: string, car: ICar):Promise <Car | undefined> {
//     const result = await this.carODM.update(id, car);

//     return this.createCarDomain(result);
//   }
  
//   public async removeOne(id:string): Promise <Car | undefined> {
//     const result = await this.carODM.remove(id);

//     return this.createCarDomain(result);
//   }
// }

// export default VehiclesService;