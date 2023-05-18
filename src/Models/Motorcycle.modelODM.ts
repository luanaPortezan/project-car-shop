import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractModelODM from './Abstract.modelODM';

class MotorcycleModelODM extends AbstractModelODM<IMotorcycle> {
  constructor() {
    const schema = new Schema <IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },  

    });

    super(schema, 'Motorcycle');
  }
}

export default MotorcycleModelODM;