import CategoryTypes from '../Middlewares/types.category';
import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: CategoryTypes;
  engineCapacity: number
}

export default IMotorcycle;