import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.buyValue = vehicle.buyValue;
    this.status = vehicle.status || false;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }

  public getYear() {
    return this.year;
  }

  public setYear(value: number) {
    this.year = value;
  }

  public getColor() {
    return this.color;
  }

  public setColor(value: string) {
    this.color = value;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(value: boolean) {
    this.status = value;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(value: number) {
    this.buyValue = value;
  }
}
export default Vehicle;